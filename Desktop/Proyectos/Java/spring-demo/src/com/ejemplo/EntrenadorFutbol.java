package com.ejemplo;

import org.springframework.stereotype.Component;

@Component
public class EntrenadorFutbol implements Entrenador {
	
	private ExperienciaServicio experienciaServicio;

	protected String email;
	protected String equipo;
	
	@Override
	public String getEntrenamiento() {
		return "Correr durante 30 minutos";
	}
	
	@Override
	public int getExperiencia() {
		return experienciaServicio.getExperiencia();
	}
	
	public EntrenadorFutbol(ExperienciaServicio experienciaServicio) {
		this.experienciaServicio = experienciaServicio;
	}

	@Override
	public void setEmail(String email) {
		System.out.println("Inyección de un literal en un método setter: " + email);
		this.email = email;
	}

	@Override
	public void setEquipo(String equipo) {
		System.out.println("Inyección de un literal en un método setter: " + equipo);
		this.equipo = equipo;
	}

	@Override
	public String getEmail() {
		return email;
	}
	
	@Override
	public String getEquipo() {
		return equipo;
	}
}
