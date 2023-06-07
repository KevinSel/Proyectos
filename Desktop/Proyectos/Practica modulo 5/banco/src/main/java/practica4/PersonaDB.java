
package practica4;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Random;
import java.util.Scanner;

public class PersonaDB {
	
	private static String query;
	private static ResultSet resultados;
	
	public static String dbSetNombre(Scanner sc, String tipoCuenta, int id) {
		System.out.println("Ingrese el nombre");
		String nombre = sc.next();
		query = "UPDATE `"+tipoCuenta+"` SET nombre = (?) WHERE `id` = (?)";
		DbConnection.dbUpdate(query, new String[] {nombre, Integer.toString(id)});
		return nombre;
	};
	
	public static String dbSetApellido(Scanner sc, String tipoCuenta, int id) {
		System.out.println("Ingrese el apellido");
		String apellido = sc.next();
		query = "UPDATE `"+tipoCuenta+"` SET apellido = (?) WHERE `id` = (?)";
		DbConnection.dbUpdate(query, new String[] {apellido, Integer.toString(id)});
		return apellido;	
	};
	
	public static String dbSetUsuario(Scanner sc, String tipoCuenta, int id) {
		System.out.println("Ingrese el usuario");
		String usuario = sc.next();
		query = "UPDATE `"+tipoCuenta+"` SET usuario = (?) WHERE `id` = (?)";
		DbConnection.dbUpdate(query, new String[] {usuario, Integer.toString(id)});
		return usuario;
	};
	
	public static void dbSetContaseña(Scanner sc, String tipoCuenta, int id) {
		System.out.println("Ingrese la nueva contraseña");
		String password = sc.next();
		query = "UPDATE `"+tipoCuenta+"` SET password = (?) WHERE `id` = (?)";
		DbConnection.dbUpdate(query, new String[] {main.SHA3(password), Integer.toString(id)});
	};

	public static void dbSetGestor(Scanner sc, int id) {
		int id_gestor = main.obtenerIdPorConsola(sc);
		query = "UPDATE `cliente` SET `id_gestor` = (?) WHERE `id` = (?)";
		DbConnection.dbUpdate(query, new String[] {Integer.toString(id_gestor), Integer.toString(id)});
	};
	
	public static Persona logIn(Scanner sc) {
		
		System.out.println("Usuario:");
		String usuario = sc.next();
		System.out.println("Contraseña:");
		String password= sc.next();
		
		try {
			
			query = "SELECT id, id_gestor,nombre, apellido, usuario, balance FROM cliente\r\n"
					+ "WHERE usuario LIKE ? AND password LIKE ?";
			
			resultados = DbConnection.dbSelect(query, new String[] {usuario,main.SHA3(password)});
			if (resultados.next()) {
				return new Cliente(resultados.getInt("id"),
								   resultados.getInt("id_gestor"),
								   resultados.getString("nombre"),
								   resultados.getString("apellido"),
								   resultados.getString("usuario"),
								   resultados.getDouble("balance"));
			} else {
				query = "SELECT id, nombre, apellido, usuario, salario FROM gestor\r\n"
						+ "WHERE usuario LIKE ? AND password LIKE ?";
				resultados = DbConnection.dbSelect(query, new String[] {usuario,main.SHA3(password)});
				if (resultados.next()) {
					return new Gestor(resultados.getInt("id"),
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
		
		System.out.println("\nUsuario o contraseña incorrectos");
		return null; 	
		
	};

	public static Boolean logIn(String usuario, String password) {

		try {
			
			query = "SELECT id, id_gestor,nombre, apellido, usuario, balance FROM cliente\r\n"
					+ "WHERE usuario LIKE ? AND password LIKE ?";
			
			
			resultados = DbConnection.dbSelect(query, new String[] {usuario,main.SHA3(password)});
			if (resultados.next()) {
				return true;
			} else {
				query = "SELECT id, nombre, apellido, usuario, salario FROM gestor\r\n"
						+ "WHERE usuario LIKE ? AND password LIKE ?";
				resultados = DbConnection.dbSelect(query, new String[] {usuario,main.SHA3(password)});
				if (resultados.next()) {
					return true;
				}
			};
			
		}catch(SQLException e){
		e.printStackTrace();
			
		} finally {
			DbConnection.cerrarDb();
		};
		
		System.out.println("\nUsuario o contraseña incorrectos");
		return false; 	
		
	};
	
	public static void dBBorrar(int id, String tipoCuenta) {
		String query = "DELETE FROM "+tipoCuenta+" WHERE id = ?";
		DbConnection.dbUpdate(query,new String[] {Integer.toString(id)});
	}
	
	public static void dbGetTodos(String tipoCuenta) {
		
		if (tipoCuenta.equals("cliente")) {
			query = "SELECT cliente.id, cliente.nombre, cliente.apellido, cliente.usuario, balance, gestor.nombre, gestor.apellido  FROM cliente, gestor WHERE id_gestor = gestor.id";
		} else {
			query = "SELECT id, nombre, apellido, usuario, salario FROM gestor";
		};
		
		resultados = DbConnection.dbSelect(query, new String[] {});
			
		try {
			while(resultados.next()) {
				System.out.println("\n ID: " + resultados.getInt("id"));
				System.out.println(" Nombre: " + resultados.getString(2));
				System.out.println(" Apellido: " + resultados.getString(3));
				System.out.println(" Usuario: " + resultados.getString(4));
				if(tipoCuenta.equals("cliente")) {
					System.out.println(" Balance: " + resultados.getInt(5));
					System.out.println(" Gestor: " + resultados.getString(6) + " " + resultados.getString(7));
				} else {
					System.out.println(" Salario: " + resultados.getInt(5));
				};

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
	
	};
	
	public static void dbGetPersonaPorId(int id, String tipoCuenta) {
		
		if (tipoCuenta.equals("cliente")) {
			query = "SELECT cliente.id, cliente.nombre, cliente.apellido, cliente.usuario, balance, gestor.nombre as nombreGestor, gestor.apellido as apellidoGestor FROM cliente, gestor WHERE id_gestor = gestor.id AND cliente.id = ?";
		} else {
			query = "SELECT id, nombre, apellido, usuario, salario FROM gestor WHERE id = ?";
		};
		
		resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			
		try {
			if(resultados.next()) {
				System.out.println("\n ID: " + resultados.getInt("id"));
				System.out.println(" Nombre: " + resultados.getString("nombre"));
				System.out.println(" Apellido: " + resultados.getString("apellido"));
				System.out.println(" Usuario: " + resultados.getString("usuario"));
				if(tipoCuenta.equals("cliente")) {
					System.out.println(" Balance: " + resultados.getInt("balance"));
					System.out.println(" Gestor: " + resultados.getString("nombreGestor") + " " + resultados.getString("apellidoGestor"));
				} else {
					System.out.println(" Salario: " + resultados.getInt("salario"));
				};
			} else {
				System.out.println("Persona no encontrada");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
	};

	public static void dbRegistrar(Scanner sc, Boolean esGestor) {


		System.out.println("Nombre: ");
		String nombre = sc.next();
		System.out.println("Apellido: ");
		String apellido = sc.next();
		System.out.println("Usuario: ");
		String usuario = sc.next();
		System.out.println("Contraseña: ");
		String password = main.SHA3(sc.next());
		
		if (esGestor) {
			DbConnection.dbUpdate("INSERT INTO `gestor` (`id`,`nombre`,`apellido`,`usuario`,`password`,`salario`) VALUES (NULL, ?, ?, ?, ?, ?)", 
					new String[] {nombre, apellido, usuario, password, "1000"});
		} else {
			DbConnection.dbUpdate("INSERT INTO `cliente` (`id`,`id_gestor`,`nombre`,`apellido`,`usuario`,`password`,`balance`) VALUES (NULL, ?, ?, ?, ?, ?, ?)", 
					new String[] {"2", nombre, apellido, usuario, password,"0"});
		}
		
	}
	
	public static void dbRegistrar(Scanner sc, int gestorId) {

		System.out.println("Nombre: ");
		String nombre = sc.next();
		System.out.println("Apellido: ");
		String apellido = sc.next();
		System.out.println("Usuario: ");
		String usuario = sc.next();
		System.out.println("Contraseña: ");
		String password = main.SHA3(sc.next());
		
		DbConnection.dbUpdate("INSERT INTO `cliente` (`id`,`id_gestor`,`nombre`,`apellido`,`usuario`,`password`,`balance`) VALUES (NULL, ?, ?, ?, ?, ?, ?)", 
		new String[] {Integer.toString(gestorId),nombre, apellido, usuario, password, "250"});	
		
	}

	public static void dbRegistrarEnMasa(int cantidad) {

		Random rand = new Random();
		String nombre;
		String apellido;
		String usuario;
		String password;
		String salario;
		
		for (int i=0; i<cantidad; i++ ) {
			nombre = "GestorAleatorio" + rand.nextInt(10000);
			apellido = "gestorApellido" + rand.nextInt(3000);
			usuario = rand.nextInt(10000) + "GestorAleatorio";
			password = main.SHA3("password" + rand.nextInt(50000)); 
			salario = "" + rand.nextInt(30000);
			
			DbConnection.dbUpdate("INSERT INTO `gestor` (`id`,`nombre`,`apellido`,`usuario`,`password`,`salario`) VALUES (NULL, ?, ?, ?, ?, ?)", 
					new String[] {nombre, apellido, usuario, password, salario});
		}
	};

}
