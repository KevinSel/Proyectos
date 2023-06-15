package com.spring.main.restservice;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.practica4.PersonaDB;


@RestController
public class PersonaController {

	@GetMapping(value="/gestor")
	public ArrayList<PersonaRecord> devolverGestores(@RequestParam(value="id", defaultValue = "0") int id) {
		return PersonaDB.devolverGestores(id);
		
	}
		
	@GetMapping(value="/cliente")
	public ArrayList<PersonaRecord> devolverClientes(@RequestParam(value="id", defaultValue = "0") int id) {
		return PersonaDB.devolverClientes(id);
		
	}
	
	@GetMapping(value="/clientesGestor")
	public ArrayList<PersonaRecord> devolverClientesPorGestor(@RequestParam(value="id") int id) {
		return PersonaDB.devolverClientesDeGestor(id);
	}
	
	@PutMapping(value="actualizarCliente")
	public String actualizarCliente(@RequestBody HashMap<String, String > body) {
		return PersonaDB.actualizarCliente(body);}
	
	@PutMapping(value="actualizarGestor")
	public String actualizarGestor(@RequestBody HashMap<String, String > body) {
		return PersonaDB.actualizarGestor(body);}
	
	@PutMapping(value="actualizarPassword")
	public String actualizarPassword(@RequestBody HashMap<String, String > body) {
		return PersonaDB.actualizarPassword(body);}
	
	@PutMapping(value="borrarUsuario")
	public String borrarUsuario(@RequestBody HashMap<String, String> usuario) {
		return PersonaDB.borrarUsuario(usuario.get("usuario"));}
	
}
