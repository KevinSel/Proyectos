
package com.spring.practica4;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;
import java.util.Scanner;
import com.spring.main.restservice.PersonaRecord;

public class PersonaDB {
	
	private static String query;
	private static ResultSet resultados;
	static Random rand = new Random();

	public static String actualizarPassword(HashMap<String,String> datos) {
		String tipoCuenta = datos.get("tipoCuenta");
		query = "UPDATE " +tipoCuenta+ " SET password = ? WHERE id = ?";
	    try {
			DbConnection.dbUpdate(query, new String[] {SHA3(datos.get("password")), datos.get("id")});
		} catch (SQLException e) {
			e.printStackTrace();
			return "{\"respuesta\" : \"Error\"}";
		} finally {DbConnection.cerrarDb();}
		return "{\"respuesta\" : \"Contraseña actualizada\"}";
	}
	
	public static String actualizarCliente(HashMap<String, String> datos) {
		query = "UPDATE cliente SET id_gestor = ?, nombre = ?, apellido = ?, usuario = ?, balance = ? WHERE id = ?";
		try {
			DbConnection.dbUpdate(query, new String[] {datos.get("id_gestor"),
													   datos.get("nombre"),
													   datos.get("apellido"),
													   datos.get("usuario"),
													   datos.get("balance"),
													   datos.get("id")});
		} catch (SQLException e) {
			e.printStackTrace();
			return "{\"respuesta\" : \"Error\"}";
		} finally {DbConnection.cerrarDb();}
		return "{\"respuesta\" : \"Cliente actualizado\"}";
	}
	
	public static String actualizarGestor(HashMap<String, String> datos) {
		query = "UPDATE gestor SET nombre = ?, apellido = ?, usuario = ?, salario = ? WHERE id = ?";
		try {
			DbConnection.dbUpdate(query, new String[] {datos.get("nombre"),
													   datos.get("apellido"),
													   datos.get("usuario"),
													   datos.get("salario"),
													   datos.get("id")});
		} catch (SQLException e) {
			e.printStackTrace();
			return "{\"respuesta\" : \"Error\"}";
		} finally {DbConnection.cerrarDb();}
		
		return "{\"respuesta\" : \"Gestor actualizado\"}";
	}
	
	public static PersonaRecord logIn(String usuario, String password) {
		
		try {
			query = "SELECT id, id_gestor,nombre, apellido, usuario, balance FROM cliente\r\n"
					+ "WHERE usuario LIKE ? AND password LIKE ?";
			
			resultados = DbConnection.dbSelect(query, new String[] {usuario,SHA3(password)});
			
			if (resultados.next()) {
				return new PersonaRecord(resultados.getInt("id"),
								   resultados.getInt("id_gestor"),
								   resultados.getString("nombre"),
								   resultados.getString("apellido"),
								   resultados.getString("usuario"),
								   resultados.getDouble("balance"));
			} else {
				query = "SELECT id, nombre, apellido, usuario, salario FROM gestor\r\n"
						+ "WHERE usuario LIKE ? AND password LIKE ?";
				resultados = DbConnection.dbSelect(query, new String[] {usuario,SHA3(password)});
				if (resultados.next()) {
					return new PersonaRecord(resultados.getInt("id"),
							   resultados.getString("nombre"),
							   resultados.getString("apellido"),
							   resultados.getString("usuario"),
							   resultados.getDouble("salario"));
				}
			};
			
		}catch(SQLException e){
		e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
		return null; 	
	};

	public static boolean verificarClientePorId (int id){
		
		query = "SELECT id FROM cliente WHERE id = ?";
		
		try {
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			return(resultados.next());
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}
		
		return false;
	}
	
	public static boolean verificarUsuario(String usuario){
		
		query = "SELECT usuario FROM ((SELECT usuario FROM cliente) UNION (SELECT usuario FROM gestor)) as tb WHERE usuario LIKE (?)";
		
		try {
			if(DbConnection.dbSelect(query, new String[] {usuario} ).next()) {return true;}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}; 
		
		return false;
	}
	
	public static boolean dbRegistrar(Boolean esGestor, String nombre, String apellido, String usuario, String password) {
		if(verificarUsuario(usuario)) {return false;}
		try {
			if (esGestor) {
				DbConnection.dbUpdate("INSERT INTO `gestor` (`id`,`nombre`,`apellido`,`usuario`,`password`,`salario`) VALUES (NULL, ?, ?, ?, ?, ?)", 
						new String[] {nombre, apellido, usuario, SHA3(password), "1000"});
			} else {
				DbConnection.dbUpdate("INSERT INTO `cliente` (`id`,`id_gestor`,`nombre`,`apellido`,`usuario`,`password`,`balance`) VALUES (NULL, ?, ?, ?, ?, ?, ?)", 
						new String[] {"2", nombre, apellido, usuario, SHA3(password),"100"});
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {DbConnection.cerrarDb();}
		return true;			
	}
	
	public static String dbRegistrarEnMasa(int cantidad) {

		for (int i=0; i<cantidad; i++ ) {
			String nombre = "GestorAleatorio" + rand.nextInt(10000);
			String apellido = "gestorApellido" + rand.nextInt(3000);
			String usuario = rand.nextInt(10000) + "GestorAleatorio";
			String password = SHA3("password" + rand.nextInt(50000)); 
			String salario = "" + rand.nextInt(30000);
			
			try {
				DbConnection.dbUpdate("INSERT INTO `gestor` (`id`,`nombre`,`apellido`,`usuario`,`password`,`salario`) VALUES (NULL, ?, ?, ?, ?, ?)", 
						new String[] {nombre, apellido, usuario, password, salario});
			} catch (SQLException e) {
				e.printStackTrace();
				return "{\"respuesta\" : \"Error\"}";
			} finally {DbConnection.cerrarDb();}
		}
		return "{\"respuesta\" : \"Gestores creados\"}";
	};

	public static ArrayList<PersonaRecord> devolverClientes(int id){
		
		ArrayList<PersonaRecord> personas = new ArrayList<PersonaRecord>();
		
		query = "SELECT * FROM cliente";

		try {
			if(id>0) {
				query += " WHERE id = ?";
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			} else {
				resultados = DbConnection.dbSelect(query);
			}
			while (resultados.next()) {
				personas.add(new PersonaRecord(
						resultados.getInt("id"),
						resultados.getInt("id_gestor"),
						resultados.getString("nombre"),
						resultados.getString("apellido"),
						resultados.getString("usuario"),
						resultados.getDouble("balance")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}
		return personas;
	}
	
	public static ArrayList<PersonaRecord> devolverGestores(int id){
		
		ArrayList<PersonaRecord> personas = new ArrayList<PersonaRecord>();
		
		query = "SELECT * FROM gestor";
	
		try {
			if(id>0) {
				query += " WHERE id = ?";
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			} else {
				resultados = DbConnection.dbSelect(query);
			}
			while (resultados.next()) {
				personas.add(new PersonaRecord(
						resultados.getInt("id"),
						resultados.getString("nombre"),
						resultados.getString("apellido"),
						resultados.getString("usuario"),
						resultados.getDouble("salario")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}
		
		return personas;
	}
	
	public static ArrayList<PersonaRecord> devolverClientesDeGestor(int id){
		
	ArrayList<PersonaRecord> personas = new ArrayList<PersonaRecord>();
		
	query = "SELECT * FROM cliente WHERE id_gestor = ?";

	try {
		resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
		while (resultados.next()) {
			personas.add(new PersonaRecord(
					resultados.getInt("id"),
					resultados.getInt("id_gestor"),
					resultados.getString("nombre"),
					resultados.getString("apellido"),
					resultados.getString("usuario"),
					resultados.getDouble("balance")));
		}
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {DbConnection.cerrarDb();}
	
	return personas;
	
	}
	
	public static double getBalanceFromId(int id) {
		query = "SELECT balance FROM cliente WHERE id = ?";
		double balance = 0;
		try {
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)} );
			resultados.next();		
			balance = resultados.getDouble("balance");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}
		return balance;
	};

	
	//Borrar --- Los datos no se borran, se hacen inaccesibles para no perder el rastro de las operaciones y mensajes.
	
	public static String borrarUsuario(String usuario) {		
		try {
			query = "UPDATE gestor SET `password` = \"Eliminado\", usuario = Eliminado, salario = 0"
					+ " WHERE usuario LIKE ?";
			DbConnection.dbUpdate(query, new String[] {usuario});
			
			query = "UPDATE cliente SET `password` = \"Eliminado\", usuario = Eliminado, balance = 0"
					+ " id_gestor = 2 WHERE usuario LIKE ?";
			DbConnection.dbUpdate(query, new String[] {usuario});
			
		} catch (SQLException e) {
			e.printStackTrace();
			return  "{\"respuesta\" : \"Error\"}";
		} finally {DbConnection.cerrarDb();}

		return  "{\"respuesta\" : \"Usuario eliminado\"}";	
	}
		
	//SHA3 ---
	
	public static String SHA3(String str) {
		try {
		final MessageDigest digest = MessageDigest.getInstance("SHA3-256");
		final byte[] hashbytes = digest.digest(str.getBytes(StandardCharsets.UTF_8));
		return bytesToHex(hashbytes);
		} catch (Exception e) {
		e.printStackTrace();
		return null;
		}
	}
	
	private static String bytesToHex(byte[] hash) {
		StringBuffer hexString = new StringBuffer();
		for (int i = 0; i < hash.length; i++) {
		String hex = Integer.toHexString(0xff & hash[i]);
		if (hex.length() == 1)
		hexString.append('0');
		hexString.append(hex);
		}
		return hexString.toString();
	}

}
