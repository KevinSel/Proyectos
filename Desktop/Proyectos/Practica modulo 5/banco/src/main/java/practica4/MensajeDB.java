package practica4;

import java.sql.ResultSet;

import java.sql.SQLException;
import java.util.Scanner;
import java.sql.Timestamp;

public class MensajeDB {

	private static String query;
	private static ResultSet resultados;
	
	public static void dbGetMensajes() {
			
			query = "SELECT * FROM mensaje";
			
			resultados = DbConnection.dbSelect(query);
				
			try {
				while(resultados.next()) {
					System.out.println("ID: " + resultados.getInt("id"));
					System.out.println("Mensaje: " + resultados.getString("mensaje"));
					System.out.println("Emisor: " + resultados.getString("us_emisor"));
					System.out.println("Receptor: " + resultados.getString("us_receptor"));
					System.out.println("Fecha: " + resultados.getString("fecha"));
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally{
				DbConnection.cerrarDb();
			};
			
		}

	public static void dbGetUnMensaje(int id) {
		
		query = "SELECT * FROM mensaje WHERE id = ?";
		
		resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			
		try {
			if(resultados.next()) {
				System.out.println("ID: " + resultados.getInt(1));
				System.out.println("Mensaje: " + resultados.getString(2));
				System.out.println("Emisor: " + resultados.getString(3));
				System.out.println("Receptor: " + resultados.getString(4));
				System.out.println("Fecha: " + resultados.getDate(5));
			} else {
				System.out.println("Mensaje no encontrado");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
		
	};

	public static void dbGetMisMensaje(String usuario) {
			
		query =	"SELECT * FROM mensaje WHERE us_emisor LIKE ? OR us_receptor LIKE ?";
			
		resultados = DbConnection.dbSelect(query, new String[] {usuario, usuario});
			
		try {
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Mensaje: " + resultados.getString("mensaje"));
				System.out.println("Emisor: " + resultados.getString("us_emisor"));
				System.out.println("Receptor: " + resultados.getString("us_receptor"));
				System.out.println("Fecha: " + resultados.getString("fecha"));
			};
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
	}
	
	public static void dbNuevoMensaje(Scanner sc, String us_emisor) {
		
		System.out.println("Ingresa el nombre de usuario receptor");
			String us_receptor = sc.next();
		System.out.println("Escriba su mensaje");
			String mensaje = sc.next();
		
		query = "SELECT usuario FROM \r\n"
				+ "((SELECT usuario FROM cliente) UNION (SELECT usuario FROM gestor)) as usuarios WHERE usuario LIKE (?)";
		
		resultados = DbConnection.dbSelect(query, new String[] {us_receptor});
			
		try {
			if(!resultados.next()) {
				System.out.println("Usuario no encontrado");
				return;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
			
		query = "INSERT INTO `mensaje` (`id`,`mensaje`,`us_emisor`,`us_receptor`,`fecha`) VALUES (NULL,?, ?, ?, ?)";
		
		DbConnection.dbUpdate(query, new String[] {mensaje, us_emisor, us_receptor, "fecha"});
		
		System.out.println("Mensaje enviado");
		
	}
	
}
	

