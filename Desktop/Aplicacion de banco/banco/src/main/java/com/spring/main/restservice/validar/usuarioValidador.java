package com.spring.main.restservice.validar;

import java.util.regex.Pattern;

import com.spring.jbcd.UsuarioDB;
import com.spring.main.restservice.Respuesta;
import com.spring.main.restservice.Usuario;

public class usuarioValidador {
  
  private static Respuesta respuesta;
  
  public static Respuesta validarNuevoUsuario(Usuario usuario){
    respuesta = validarNombreUsuario(usuario.usuario());
    if(respuesta.valido()) {
      respuesta = validarPassword(usuario.password());
    }
    if(respuesta.valido()) {
      respuesta = new Respuesta("Nombre de usuario no disponible", UsuarioDB.existeUsuario(usuario.usuario()));	    
    }
    return respuesta;
  }
  
  public static Respuesta validarNombreUsuario(String usuario) {
	if (!Pattern.matches("^[A-Za-z0-9]*$", usuario)) {
      return new Respuesta("El usuario debe consistir de caracteres alfanumericos", false);
    }
    else if (!Pattern.matches("^.{6,16}$", usuario)) {
      return new Respuesta("El usuario debe tener una longitud entre 6 y 16 caracteres", false);
    }
    else{
      return new Respuesta ("", true);
    }
  }
  
  public static Respuesta validarPassword(String password) {
    if (!Pattern.matches("^[-~]*$", password)) {
	  return new Respuesta("La contraseña debe consisitir de caracteres ASCII", false);
	}
	else if (!Pattern.matches("^.{6,16}$", password)) {
	  return new Respuesta("La contraseña debe tener una longitud entre 6 y 16 caracteres", false);
	}
    else{
      return new Respuesta ("", true);
    }
  }
	
}
