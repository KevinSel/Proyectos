package com.spring.jbcd;

import java.sql.ResultSet;
import java.sql.SQLException;
import com.spring.main.restservice.Mensaje;
import com.spring.main.restservice.Respuesta;
import com.spring.main.restservice.validar.mensajeValidador;

import java.util.ArrayList;

public class MensajeDB {

  private static String query;
  
  private static ResultSet resultados;
  
  private static String[] argumentos;
 
  public static Respuesta dbNuevoMensaje(Mensaje mensaje) {
	
    Respuesta respuesta = mensajeValidador.validarNuevoMensaje(mensaje);
    if (!respuesta.valido()) {
      return respuesta;
    }
    query = "INSERT INTO `mensaje` (`nombre_usuario_emisor`,`nombre_usuario_receptor`,`mensaje`) VALUES (?, ?, ?)";
    argumentos = new String[] {mensaje.nombre_usuario_emisor(), mensaje.nombre_usuario_receptor(), mensaje.mensaje()};
    if (DbConnection.update(query, argumentos) != 0) {
      respuesta = new Respuesta("Mensaje enviado", true);
    } else {
      respuesta = new Respuesta("Error inesperado, no se ha ingresado ningun mensaje", false);
    }
    return respuesta;
  }
 
  public static ArrayList<Mensaje> dbGetMensajes(int id) {
	  
	ArrayList<Mensaje> mensajes= new ArrayList<Mensaje>();
    query = "SELECT * FROM mensaje";

    try {
      if (id != 0) {query += " AND ID LIKE ?";
        resultados = DbConnection.select(query,new String[] {Integer.toString(id)});
      } else {
        resultados = DbConnection.select(query);
      };
      while(resultados.next()) {
        Mensaje mensaje = new Mensaje(
          resultados.getInt("id_mensaje"),
          resultados.getString("nombre_usuario_emisor"),
          resultados.getString("nombre_usuario_receptor"),
          resultados.getString("mensaje"),
          resultados.getString("fecha")
        );
      mensajes.add(mensaje);
      }
    } catch (SQLException e) {
      e.printStackTrace();
      return null;
    } finally { 
      DbConnection.cerrarConexion();
    }  
    return mensajes;   
 }
 
  public static ArrayList<Mensaje> dbGetMensajesUsuario(String usuario) {
	  
	ArrayList<Mensaje> mensajes= new ArrayList<Mensaje>();
    query = "SELECT * FROM mensaje WHERE nombre_usuario_receptor LIKE ? or nombre_usuario_emisor LIKE ?";
    argumentos = new String[] {usuario, usuario};
    
    try {
      resultados = DbConnection.select(query, argumentos);
      while(resultados.next()) {
        Mensaje mensaje = new Mensaje(
        resultados.getInt("id"),
        resultados.getString("nombre_usuario_emisor"),
        resultados.getString("nombre_usuario_receptor"),
        resultados.getString("mensaje"),
        resultados.getString("fecha")
        );
        mensajes.add(mensaje);
      }
    } catch (SQLException e) {
      e.printStackTrace();
      return null;
    } finally{
      DbConnection.cerrarConexion();
    } 
    return mensajes;
  }
 
}
 

