package com.spring.main.restservice;

public record Transferencia(int id, int id_cliente_emisor, int id_cliente_receptor, double monto, String fecha) {
	
  public Transferencia(int id_cliente_emisor, int id_cliente_receptor, double monto) {
    this(0, id_cliente_emisor, id_cliente_receptor, monto, null);  
  }
  
}
