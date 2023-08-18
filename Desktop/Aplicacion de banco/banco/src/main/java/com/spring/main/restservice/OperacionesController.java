package com.spring.main.restservice;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.jbcd.OperacionesDB;

@RestController
public class OperacionesController {
 
  @PostMapping("/nuevaTransferencia")
  public String nuevaTransferencia(@RequestBody Deposito transferencia) {
    return OperacionesDB.dBNuevaTransferencia(transferencia);
  }
 
  @PostMapping("/nuevoDeposito")
  public String nuevoDeposito(@RequestBody Deposito deposito) {
    return OperacionesDB.dBNuevoDeposito(deposito);
  }
 
  @GetMapping("/transferencia")
  public ArrayList<Deposito> verTransferenciaPorId(@RequestParam(value="id", defaultValue = "0") int id) {
    return OperacionesDB.dBVerTransferencias(id);
  }
 
  @GetMapping("/deposito")
  public ArrayList<Deposito> verDepositoPorId(@RequestParam(value="id",  defaultValue = "0") int id) {
    return OperacionesDB.dBVerDepositos(id);
  }
 
  @GetMapping("/depositosCliente")
  public ArrayList<Deposito> verDepositosCliente(@RequestParam(value="id") int id) {
    return OperacionesDB.dbVerDepositosCliente(id);
  }
 
  @GetMapping("/transferenciasCliente")
  public ArrayList<Deposito> verTransferenciasCliente(@RequestParam(value="id") int id) {
    return OperacionesDB.dbVerTransferenciasCliente(id);
  }
}
