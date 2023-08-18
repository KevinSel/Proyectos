package com.spring.main.restservice;

public record Deposito (int id, int id_cliente, double monto, String fecha) {

  public Deposito (int id_cliente, double monto){
    this(0, id_cliente, monto, null);
  }
  
}

