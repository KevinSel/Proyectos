package com.spring.main.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spring.practica4.*;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.main.BancoApplication;

@RestController
public class LogInController {

	PersonaRecord personaRecord;
	
	@PostMapping(path="/login")
	public PersonaRecord logIn(@RequestBody LogIn login) {
		personaRecord = PersonaDB.logIn(login.usuario(), login.password());
		if (personaRecord != null) {BancoApplication.sesion = true;}
			return personaRecord;
	}
	
	@GetMapping("/login/logoff")
	public void logOff () {
		BancoApplication.sesion = false;
		personaRecord = null;
	}
	
	@GetMapping(value="/login/usuario")
	public PersonaRecord getLoggedUser() {
		return personaRecord;
	}
	
	@PostMapping("/registrarse")
	public boolean registrarse(@RequestBody RegistroRecord registro){
		return PersonaDB.dbRegistrar(registro.regGestor(), registro.nombre(), registro.apellido(), registro.usuario(), registro.password());
	}
	
	@GetMapping(value="/crearGestores")
	public String crearGestores(@RequestParam(value="cantidad") int cantidad) {
		return PersonaDB.dbRegistrarEnMasa(cantidad);
	}
	
	
}