package com.spring.jbcd;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Calendar;

import com.spring.main.StringMetodos;


public class DbConnection {
 
  private static Statement instruccion = null;
  
  private static ResultSet resultados = null;
  
  private static Connection conexion = null;
  
  private static PreparedStatement ps = null;
 
  public static ResultSet select(String consulta) throws SQLException {
    abrirConexion();
	instruccion = conexion.createStatement();
	instruccion.executeQuery(consulta);
	return instruccion.getResultSet();
  };
 
  public static ResultSet select(String consulta, String[] args) throws SQLException {
	abrirConexion();
	return llenarPreparedStatement(prepararStatement(consulta),args).executeQuery();
  };
 
  public static int update(String consulta) { 
	abrirConexion();
	return executeUpdateSinArgumentos(consulta);
  }
 
  public static int update(String consulta, String[] args) {
	abrirConexion();
	ps = llenarPreparedStatement(prepararStatement(consulta),args);
	return executeUpdateConArgumentos(ps);
  }

  public static int update(int id, String tabla, String columna, String valorNuevo) {
    String query = "UPDATE " +tabla+ " SET " +columna+ " = ? WHERE id = ?";
    if (columna.equals("password")) {
      valorNuevo = StringMetodos.SHA3(valorNuevo);
    }
    return DbConnection.update(query, new String[] {valorNuevo, Integer.toString(id)});
  }
  
  private static PreparedStatement prepararStatement(String consulta) {
	try {
	  return conexion.prepareStatement(consulta);
	} catch (SQLException e) {
	  e.printStackTrace();
	}
	return null;
  }
  
  private static PreparedStatement llenarPreparedStatement(PreparedStatement psALlenar, String[] argumentos) {
    try {
      for (int argInd = 0; argInd < argumentos.length; argInd++) {
    	  psALlenar.setString(argInd + 1, argumentos[argInd]);
      }
	} catch (SQLException e) {
	  e.printStackTrace();
	}
    return psALlenar;
  }
  
  private static int executeUpdateSinArgumentos(String consulta) {
	    try {
		  return conexion.createStatement().executeUpdate(consulta);
		} catch (SQLException e) {
		  e.printStackTrace();
		  return 0;
		} finally {
		  cerrarConexion();
		}
	  }
  
  private static int executeUpdateConArgumentos(PreparedStatement statement){
	try {
	  return statement.executeUpdate();
	} catch (SQLException e) {
	  e.printStackTrace();
	  return 0;
	} finally {
	  cerrarConexion();
	}
  }
  
  public static void abrirConexion() {
	try {
	  conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "banco", "banco");
	} catch (SQLException e) {
	  e.printStackTrace();
	}
  }
  
  public static void cerrarConexion() {
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
 
