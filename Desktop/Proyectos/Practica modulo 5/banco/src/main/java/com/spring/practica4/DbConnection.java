package com.spring.practica4;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Calendar;


public class DbConnection {
	
	private static Statement instruccion = null;
	private static ResultSet resultados = null;
	private static Connection conexion = null;
	private static PreparedStatement ps = null;
	
	public static ResultSet dbSelect(String consulta) throws SQLException{
		conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");
		instruccion = conexion.createStatement();
		instruccion.executeQuery(consulta);
		return instruccion.getResultSet();					
	};
	
	public static ResultSet dbSelect(String consulta, String[] args) throws SQLException{
		conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");
		ps = conexion.prepareStatement(consulta);		
		for (int argInd = 0; argInd < args.length; argInd++) {
			ps.setString(argInd + 1, args[argInd]);
		} 
		return ps.executeQuery();						
	};
	
	public static void dbUpdate(String consulta) throws SQLException {
		conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");			
		conexion.createStatement().executeUpdate(consulta);
}
	
	public static void dbUpdate(String consulta, String[] args) throws SQLException {
		
		conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");
		
		ps = conexion.prepareStatement(consulta);
		
		for (int argInd = 0; argInd < args.length; argInd++) {
			if(!args[argInd].equals("fecha")) {
				ps.setString(argInd + 1, args[argInd]);
			} else {
				ps.setTimestamp(argInd +1, new Timestamp(Calendar.getInstance().getTimeInMillis()));
			};
			
		}
		
		ps.executeUpdate();
		
	}

	public static String actualizar(int id, String tabla, String columna, String valorNuevo) {
		String query = "UPDATE " +tabla+ " SET " +columna+ " = ? WHERE id = ?";
		if (columna.equals("password")) {valorNuevo = PersonaDB.SHA3(valorNuevo);}
		try {
			DbConnection.dbUpdate(query, new String[] {valorNuevo, Integer.toString(id)});
		} catch (SQLException e) {
			e.printStackTrace();
			return "{\"respuesta\" : \"Error al actualizar\"}";
		} finally {
			cerrarDb();
		}
		return "{\"respuesta\" : \"Actualizado\"}";
	}
	
	public static void cerrarDb() {
		try {
			if (resultados != null) {
				resultados.close();
			}
		
			if (instruccion != null) {
				instruccion.close();
			}

			if (conexion != null) {
				conexion.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

};
	
