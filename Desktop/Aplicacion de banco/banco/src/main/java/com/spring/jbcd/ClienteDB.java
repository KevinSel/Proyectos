package com.spring.jbcd;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.spring.main.restservice.Respuesta;

public class ClienteDB extends PersonaDB {
	
  private static String query;
	 
  private static ResultSet resultados;
	
  private static String[] argumentos;
  
  public static Respuesta ponerBalance(double balance, int id) {
    Respuesta respuesta;
    if(DbConnection.update(id, "cliente", "balance", Double.toString(balance)) > 0) {
      respuesta = new Respuesta("Balance actualizado", true);
    } else {
      respuesta = new Respuesta("Error inesperado, balance no actualizado", false);
    }
    return respuesta;
  }
  
  public static Respuesta sumarBalance(double diferencia, int id) {
    Respuesta respuesta;
    if(DbConnection.update(id, "cliente", "balance", Double.toString(obtenerBalance(id) + diferencia)) > 0) {
	  respuesta = new Respuesta("Balance actualizado", true);
	} else {
	  respuesta = new Respuesta("Error inesperado, balance no actualizado", true);
	};
    return respuesta;
  }
  
  public static double obtenerBalance(int id) {
    query = "SELECT balance FROM cliente WHERE id = ?";
    argumentos =  new String[] {Integer.toString(id)};
    try {
      resultados = DbConnection.select(query, argumentos);
      if (resultados.next()) {
        return resultados.getDouble("balance");
      }
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      DbConnection.cerrarConexion();
    }
    return 0.;
  }

  public static boolean existeClienteConId(int id) {
    query = "SELECT id_cliente FROM cliente WHERE id = ?";
    argumentos = new String[] {Integer.toString(id)};
    
    try {
	  resultados = DbConnection.select(query,argumentos);
	  return resultados.next();
	} catch (SQLException e) {
	  e.printStackTrace();
	  return false;
	} finally {
	  DbConnection.cerrarConexion();
	}
    
  }
}
