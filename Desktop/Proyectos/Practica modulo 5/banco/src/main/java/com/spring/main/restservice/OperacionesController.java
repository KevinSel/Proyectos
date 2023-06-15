package com.spring.main.restservice;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.practica4.MensajeDB;
import com.spring.practica4.OperacionesDB;

@RestController
public class OperacionesController {
	
	@PostMapping("/nuevaTransferencia")
	public String nuevaTransferencia(@RequestBody OperacionRecord transferencia) {
		return OperacionesDB.dBNuevaTransferencia(transferencia);}
	
	@PostMapping("/nuevoDeposito")
	public String nuevoDeposito(@RequestBody OperacionRecord deposito) {
		return OperacionesDB.dBNuevoDeposito(deposito);}
	
	@GetMapping("/transferencia")
	public ArrayList<OperacionRecord> verTransferenciaPorId(@RequestParam(value="id", defaultValue = "0") int id) {
		return OperacionesDB.dBVerTransferencias(id);}
	
	@GetMapping("/deposito")
	public ArrayList<OperacionRecord> verDepositoPorId(@RequestParam(value="id",  defaultValue = "0") int id) {
		return OperacionesDB.dBVerDepositos(id);}
	
	@GetMapping("/depositosCliente")
	public ArrayList<OperacionRecord> verDepositosCliente(@RequestParam(value="id") int id) {
		return OperacionesDB.dbVerDepositosCliente(id);}
	
	@GetMapping("/transferenciasCliente")
	public ArrayList<OperacionRecord> verTransferenciasCliente(@RequestParam(value="id") int id) {
		return OperacionesDB.dbVerTransferenciasCliente(id);}
	
	
}
