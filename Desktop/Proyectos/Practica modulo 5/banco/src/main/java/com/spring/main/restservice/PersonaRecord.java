package com.spring.main.restservice;

public record PersonaRecord (int id,int id_gestor ,String nombre, String apellido, String usuario, boolean esGestor, double balance, double salario) {
	
	public PersonaRecord (int id, int id_gestor, String nombre, String apellido, String usuario, double balance) {
		this(id, id_gestor, nombre, apellido, usuario, false, balance, 0);
	}
	
	public PersonaRecord (int id, String nombre, String apellido, String usuario, double salario) {
		this(id, 0, nombre, apellido, usuario, true, 0, salario);
	}
}
