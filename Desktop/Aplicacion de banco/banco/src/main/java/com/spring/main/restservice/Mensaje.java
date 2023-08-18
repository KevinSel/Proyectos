package com.spring.main.restservice;

public record Mensaje (int id_mensaje, String nombre_usuario_emisor, String nombre_usuario_receptor, String mensaje, String fecha) {
 
  public Mensaje(String mensaje, String nombre_usuario_emisor,String nombre_usuario_receptor) {
    this(0, nombre_usuario_emisor, nombre_usuario_receptor, mensaje, "");
  }

}