package com.spring.main.restservice;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.practica4.MensajeDB;

@RestController
public class MensajeController {
	
	@GetMapping(value="/mensajes")
	public ArrayList<MensajeRecord> devolverMensajes(@RequestParam(value = "id", defaultValue="0") int id) {
      	return MensajeDB.dbGetMensajes(id);
	};
	
	@GetMapping(value="/mensajesUsuario")
	public ArrayList<MensajeRecord> devolverMensajesUsuario(@RequestParam(value="usuario")String usuario){
		return MensajeDB.dbGetMensajesUsuario(usuario);
	}
	
	@PostMapping(value="/agregarMensaje")
	public String agregarMensaje(@RequestBody MensajeRecord mensaje) {
		return MensajeDB.dbNuevoMensaje(mensaje);
	}
	
}
