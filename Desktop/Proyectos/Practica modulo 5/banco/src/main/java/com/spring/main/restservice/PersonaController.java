package com.spring.main.restservice;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.practica4.PersonaDB;

import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class PersonaController {

	@GetMapping(value="/gestor")
	@ResponseBody
	public ArrayList<PersonaRecord> devolverGestores(@RequestParam(value="id", defaultValue = "0") int id) {
		return PersonaDB.devolverGestores(id);
		
	}
		
	@GetMapping(value="/cliente")
	@ResponseBody
	public ArrayList<PersonaRecord> devolverClientes(@RequestParam(value="id", defaultValue = "0") int id) {
		return PersonaDB.devolverClientes(id);
		
	}
	
	@GetMapping(value="/clientesGestor")
	@ResponseBody
	public ArrayList<PersonaRecord> devolverClientesPorGestor(@RequestParam(value="id") int id) {
		return PersonaDB.devolverClientesDeGestor(id);
	}
	
	@DeleteMapping(value="borrar")
	@ResponseBody
	public String teeest(@RequestParam String tabla, @RequestParam int id) {
		return null;}
	
	@PutMapping(value="actualizar")
	@ResponseBody
	public String test(@RequestBody HashMap body) {
		System.out.println(body.get("id"));
		return null;}
	
}
