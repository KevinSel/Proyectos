package com.spring.main.restservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.spring.practica4.*;

import org.springframework.web.bind.annotation.RequestBody;
import com.spring.main.restservice.GestorRecord;

@RestController
public class LogInController {
	
	public static Persona persona; 

	@PostMapping(path="/login")
	@ResponseBody
	public PersonaRecord logIn(@RequestBody LogIn login) {
		persona =  PersonaDB.logIn(login.usuario(), login.password());
			return new PersonaRecord(persona.getId(), persona.getNombre(), persona.getApellido(), persona.getUsuario(), persona.esGestor());
	}
}