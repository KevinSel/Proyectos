package com.spring.main.restservice;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.jbcd.MensajeDB;

@RestController
public class MensajeController {
 
  @GetMapping(value="/mensajes")
  public ArrayList<Mensaje> devolverMensajes(@RequestParam(value = "id", defaultValue="0") int id) {
    return MensajeDB.dbGetMensajes(id);
  }
 
  @GetMapping(value="/mensajesUsuario")
  public ArrayList<Mensaje> devolverMensajesUsuario(@RequestParam(value="usuario")String usuario) {
    return MensajeDB.dbGetMensajesUsuario(usuario);
  }
 
  @PostMapping(value="/agregarMensaje")
  public String agregarMensaje(@RequestBody Mensaje mensaje) {
    return MensajeDB.dbNuevoMensaje(mensaje);
  }
}
