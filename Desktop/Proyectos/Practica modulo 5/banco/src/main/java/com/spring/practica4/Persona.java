package com.spring.practica4;
import java.util.Scanner; 

public class Persona{
	
	protected Boolean esGestor;
	protected String nombre;
	protected String apellido;
	protected String usuario;
	protected String tipoCuenta;
	protected int id;
	
	
	public Boolean esGestor() {
		return esGestor;
	}

	public int getId() {
		return this.id;
	}
	
	public String getNombre() {
		return this.nombre;
	};
	
	public String getUsuario() {
		return this.usuario;
	};
	
	public String getApellido() {
		return this.apellido;
	}
		
	public void setNombre(Scanner sc) {
		tipoCuenta = esGestor? "gestor": "cliente";
		this.nombre = PersonaDB.dbSetNombre(sc, tipoCuenta, this.id);
		System.out.println("\nCuenta actualizada");
		this.getInfo();
	};
	
	public void setApellido(Scanner sc) {
		tipoCuenta = esGestor? "gestor": "cliente";
		this.apellido = PersonaDB.dbSetApellido(sc, tipoCuenta, this.id);
		System.out.println("\nCuenta actualizada");
		this.getInfo();
	};
	
	public void setUsuario(Scanner sc) {
		tipoCuenta = esGestor? "gestor": "cliente";
		this.usuario = PersonaDB.dbSetUsuario(sc, tipoCuenta, this.id);
		System.out.println("\nCuenta actualizada");
		this.getInfo();
	};
	
	public void setContraseña(Scanner sc) {
		tipoCuenta = esGestor? "gestor": "cliente";
		PersonaDB.dbSetContaseña(sc, tipoCuenta, this.id);
		System.out.println("\nCuenta actualizada");
		this.getInfo();
	};
	
	public void getInfo() {
		System.out.println("\nID: " + this.id);
		System.out.println("\nNombre: " + this.nombre + " " + this.apellido);
		System.out.println("\nNombre de usuario: " + this.usuario);
	}

	public Persona(int id, String nombre, String apellido, String usuario) {
		
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		System.out.println("\n ¡Bienvenido " + this.apellido + ", " + this.nombre + "!\n");
		
	};
}
 