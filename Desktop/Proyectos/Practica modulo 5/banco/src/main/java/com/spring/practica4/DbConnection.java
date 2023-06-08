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
	
	public static ResultSet dbSelect(String consulta, String[] args){
		
		try {
			conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");

			ps = conexion.prepareStatement(consulta);		
			for (int argInd = 0; argInd < args.length; argInd++) {
				ps.setString(argInd + 1, args[argInd]);
			} 
			
			return ps.executeQuery();					
			
		} catch (SQLException e) {
			e.printStackTrace();
		};
		return null;
	};
	
	public static ResultSet dbSelect(String consulta){
		
		try {
			conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");
			instruccion = conexion.createStatement();
			instruccion.executeQuery(consulta);
			return instruccion.getResultSet();					
		} catch (SQLException e) {
			e.printStackTrace();
		};
		return null;
	};
	
	public static void dbUpdate(String consulta, String[] args) {
		try {
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
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{cerrarDb();};
	}
	
	public static void dbUpdate(String consulta) {
		try {
			conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");			
			conexion.createStatement().executeUpdate(consulta);		
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{cerrarDb();};
	}

};
	
