package com.spring.main.restservice.validar;

import java.util.regex.Pattern;

import com.spring.jbcd.UsuarioDB;
import com.spring.main.restservice.Mensaje;
import com.spring.main.restservice.Respuesta;

public class mensajeValidador {
  
  public static Respuesta validarNuevoMensaje(Mensaje nuevoMensaje){
	  
    if (!Pattern.matches("^[A-Za-z0-9]$", nuevoMensaje.nombre_usuario_receptor())) {
      return new Respuesta("El usuario debe consistir de caracteres alfanumericos", false);
    }
    else if (!Pattern.matches("^.{6,16}$", nuevoMensaje.nombre_usuario_receptor())) {
      return new Respuesta("El usuario debe tener una longitud entre 6 y 16 caracteres", false);
    }
    else if (!UsuarioDB.existeUsuario(nuevoMensaje.nombre_usuario_receptor())) {
      return new Respuesta("Usuario no encontrado", false);
    }
    
    if (!Pattern.matches("^[A-Za-z0-9]$", nuevoMensaje.nombre_usuario_emisor())) {
      return new Respuesta("El bombre de usuario emisor debe consistir de caracteres alfanumericos", false);
    }
    else if (!Pattern.matches("^.{6,16}$", nuevoMensaje.nombre_usuario_emisor())) {
      return new Respuesta("El nombre de usuario emisor debe tener una longitud entre 6 y 16 caracteres", false);
    }
    else if (!UsuarioDB.existeUsuario(nuevoMensaje.nombre_usuario_receptor())) {
      return new Respuesta("Usuario emisor no encontrado", false);
    }
    
    else if (nuevoMensaje.mensaje().length()>10000) {
      return new Respuesta("El mensaje excede el limite de 10000 caracteres", false);
    }
    return new Respuesta ("", true);
    
  }
  
}
