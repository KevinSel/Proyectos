package com.spring.main.restservice.validar;

import com.spring.jbcd.ClienteDB;
import com.spring.main.restservice.Deposito;
import com.spring.main.restservice.Respuesta;
import com.spring.main.restservice.Transferencia;

public class operacionValidador {
	
  static Respuesta respuesta;
  
  public static Respuesta validarNuevoDeposito(Deposito deposito) {
    
	respuesta = new Respuesta ("", true);
	
    if (deposito.monto()>10000) {
      respuesta = new Respuesta("No se puede ingresar una cantidad mayor a 10000 por operacion",false);
    } else if (-deposito.monto()>10000) {
      respuesta = new Respuesta("No se puede extraer una cantidad mayor a 10000 por operacion", false);
    } else if (-deposito.monto()>ClienteDB.obtenerBalance(deposito.id_cliente())) {
      respuesta = new Respuesta("Balance insuficiente", false);
    } else if (!ClienteDB.existeClienteConId(deposito.id_cliente())) {
      respuesta = new Respuesta("Emisor no encontrado", false);
    }
    return respuesta;
    
  }
  
  public static Respuesta validarNuevaTransferencia(Transferencia transferencia) {
	  
	respuesta = new Respuesta ("", true);
    if(transferencia.monto() < 0) {
      respuesta = new Respuesta("No se puede transferir un monto negativo", false);
    } else if (transferencia.monto() > ClienteDB.obtenerBalance(transferencia.id_cliente_emisor())) {
      respuesta = new Respuesta("Balance insuficiente", false);
    } else if (!ClienteDB.existeClienteConId(transferencia.id_cliente_receptor())) {
      respuesta = new Respuesta("Receptor no encontrado", false);
    } else if (!ClienteDB.existeClienteConId(transferencia.id_cliente_emisor())) {
      respuesta = new Respuesta("Emisor no encontrado", false);
    }
    return respuesta;
    
  }
}
