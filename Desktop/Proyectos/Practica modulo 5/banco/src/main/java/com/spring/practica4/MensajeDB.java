package com.spring.practica4;

import java.sql.ResultSet;

import java.sql.SQLException;

import com.spring.main.restservice.MensajeRecord;

import java.util.ArrayList;

public class MensajeDB {

	private static String query;
	private static ResultSet resultados;
	
	public static String dbNuevoMensaje(MensajeRecord mensaje) {

		if (!PersonaDB.verificarUsuario(mensaje.us_receptor())) {return "{\"respuesta\" : \"Usuario no encontrado\"}";};
			
		query = "INSERT INTO `mensaje` (`id`,`mensaje`,`us_emisor`,`us_receptor`,`fecha`) VALUES (NULL,?, ?, ?, ?)";
		
		try {
			DbConnection.dbUpdate(query, new String[] {mensaje.mensaje(), mensaje.us_emisor(), mensaje.us_receptor(), "fecha"});
		} catch(SQLException e) {
			return "{\"respuesta\" : \"Error\"}";
		} finally { DbConnection.cerrarDb();}

		return "{\"respuesta\" : \"Mensaje enviado\"}";
	}
	
	public static ArrayList<MensajeRecord> dbGetMensajes(int id) {
		query = "SELECT id, mensaje, us_emisor ,nombre , us_receptor, nombre_r, fecha FROM mensaje\r\n"
				+ "JOIN\r\n"
				+ "(\r\n"
				+ "    (\r\n"
				+ "     (SELECT usuario as us_e, CONCAT(nombre,\" \",apellido) as nombre FROM cliente)\r\n"
				+ "     UNION\r\n"
				+ "     (SELECT usuario as us_e, CONCAT(nombre,\" \",apellido) as nombre FROM gestor)\r\n"
				+ "    ) as lista1\r\n"
				+ "    JOIN\r\n"
				+ "    (\r\n"
				+ "     (SELECT usuario as us_r, CONCAT(nombre,\" \",apellido) as nombre_r FROM cliente)\r\n"
				+ "     UNION\r\n"
				+ "     (SELECT usuario as us_r, CONCAT(nombre,\" \",apellido) as nombre_r FROM gestor)\r\n"
				+ "    ) as lista2\r\n"
				+ ")\r\n"
				+ "WHERE us_emisor = us_e AND us_receptor = us_r";
		

			
		ArrayList<MensajeRecord> mensajes= new ArrayList<MensajeRecord>();
		
		try {
			
			if (id != 0) {query += " AND ID LIKE ?";
				resultados = DbConnection.dbSelect(query,new String[] {Integer.toString(id)});
			} else {
				resultados = DbConnection.dbSelect(query);
			};
			
			while(resultados.next()) {
				MensajeRecord mensaje = new MensajeRecord(
				  resultados.getInt("id"),
				  resultados.getString("mensaje"),
				  resultados.getString("us_emisor"),
				  resultados.getString("nombre"),
				  resultados.getString("us_receptor"),
				  resultados.getString("nombre_r"),
				  resultados.getString("fecha")
				);
			 mensajes.add(mensaje);
			 
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally{
			DbConnection.cerrarDb();
		}		
		return mensajes;			
	}
	
	public static ArrayList<MensajeRecord> dbGetMensajesUsuario(String usuario) {
		query = "SELECT id, mensaje, us_emisor ,nombre , us_receptor, nombre_r, fecha FROM mensaje\r\n"
				+ "JOIN\r\n"
				+ "(\r\n"
				+ "    (\r\n"
				+ "     (SELECT usuario as us_e, CONCAT(nombre,\" \",apellido) as nombre FROM cliente)\r\n"
				+ "     UNION\r\n"
				+ "     (SELECT usuario as us_e, CONCAT(nombre,\" \",apellido) as nombre FROM gestor)\r\n"
				+ "    ) as lista1\r\n"
				+ "    JOIN\r\n"
				+ "    (\r\n"
				+ "     (SELECT usuario as us_r, CONCAT(nombre,\" \",apellido) as nombre_r FROM cliente)\r\n"
				+ "     UNION\r\n"
				+ "     (SELECT usuario as us_r, CONCAT(nombre,\" \",apellido) as nombre_r FROM gestor)\r\n"
				+ "    ) as lista2\r\n"
				+ ")\r\n"
				+ "WHERE us_emisor = us_e AND us_receptor = us_r AND (us_e LIKE ? OR us_r LIKE ?)";
		
			
		ArrayList<MensajeRecord> mensajes= new ArrayList<MensajeRecord>();
		
		try {
			
			resultados = DbConnection.dbSelect(query, new String[] {usuario,usuario});

			while(resultados.next()) {
				MensajeRecord mensaje = new MensajeRecord(
				  resultados.getInt("id"),
				  resultados.getString("mensaje"),
				  resultados.getString("us_emisor"),
				  resultados.getString("nombre"),
				  resultados.getString("us_receptor"),
				  resultados.getString("nombre_r"),
				  resultados.getString("fecha")
				);
			 	mensajes.add(mensaje);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally{DbConnection.cerrarDb();}	
		
		return mensajes;
	}
	
}
	

