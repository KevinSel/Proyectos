package com.spring.main.restservice;

public record OperacionRecord (int id, double monto, int id_emisor, String nombre_emisor, int id_receptor, String nombre_receptor, String fecha) {
	public OperacionRecord (int id, double monto, int id_cliente, String nombre_cliente, String fecha) {
		this (id, monto, id_cliente, nombre_cliente, 0, "", fecha);
	}
	public OperacionRecord (double monto, int id_emisor) {
		this (0, monto, id_emisor, "", 0, "", "");
	}
	public OperacionRecord (double monto, int id_emisor, int id_receptor) {
		this (0, monto, id_emisor, "", id_receptor, "", "");
	}
}

