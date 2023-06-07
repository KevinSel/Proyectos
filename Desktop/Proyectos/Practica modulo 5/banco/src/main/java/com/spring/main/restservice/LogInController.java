package com.spring.main.restservice;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import practica4.PersonaDB;

@RestController
public class LogInController {

	@PostMapping("/login")
	public String logIn(@RequestParam(value = "usuario", required = false) String usuario, @RequestParam(value="password", required = false) String password) {
		if(PersonaDB.logIn(usuario, password)) {
			return "logeadopa";
		}
		return "nope";
	}
}