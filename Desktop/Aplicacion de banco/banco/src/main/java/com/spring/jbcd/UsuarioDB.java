package com.spring.jbcd;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioDB {

  private static String query;
  
  private static String [] argumentos;
  
  private static ResultSet resultados;

  public static int getIdConNombreUsuario (String nombre) {
    query = "SELECT id_usuario FROM usuario WHERE nombre_usuario LIKE ?";
    argumentos = new String[] {nombre};
	try {
	  resultados = DbConnection.select(query, argumentos);
	  if (resultados.next()) {
		  return resultados.getInt("id_usuario");
	  }
	} catch (SQLException e) {
	  e.printStackTrace();
	} finally {
	  DbConnection.cerrarConexion();
	}
	return 0;
  }
  
  public static boolean existeUsuario(String usuario) {
    query = "SELECT nombre_usuario FROM usuario WHERE nombre_usuario LIKE ?";
    argumentos = new String[] {usuario};
    try {
	  resultados = DbConnection.select(query, argumentos);
	  return resultados.next();
    } catch (SQLException e) {
      e.printStackTrace();
      return false;
    } finally {
      DbConnection.cerrarConexion();
    }
  }
}
