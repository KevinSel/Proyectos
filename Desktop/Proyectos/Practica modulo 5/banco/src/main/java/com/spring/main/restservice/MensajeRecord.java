package com.spring.main.restservice;

public record MensajeRecord (int id, String mensaje, String us_emisor, String nombre_emisor, String us_receptor, String nombre_receptor, String fecha){
	public MensajeRecord(String mensaje, String us_emisor,String us_receptor) {
		this(0,mensaje,us_emisor,"",us_receptor,"","");
	}
}