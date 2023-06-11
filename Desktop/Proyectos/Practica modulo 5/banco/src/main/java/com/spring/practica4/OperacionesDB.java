package com.spring.practica4;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

import com.spring.main.restservice.OperacionRecord;

public class OperacionesDB {
	
	private static String query;
	private static ResultSet resultados;
	
	public static String dBNuevoDeposito(OperacionRecord deposito){
		
		double balance = PersonaDB.getBalanceFromId(deposito.id_emisor());
		
		query = "INSERT INTO `deposito` VALUES (NULL, ?, ?, ?)";
		
		if (-balance < deposito.monto()) {
			DbConnection.dbUpdate(query, new String[] {Integer.toString(deposito.id_emisor()),Double.toString(deposito.monto()), "fecha"});
			sumarBalance(deposito.monto(), deposito.id_emisor());
			return "{\"respuesta\" : \"Deposito realizado\"}";
		} else {
			return "{\"respuesta\" : \"Balance insuficiente\"}";
		}
		
	};
		
	public static String dBNuevaTransferencia(OperacionRecord transferencia){
		
		if(!PersonaDB.verificarClientePorId(transferencia.id_receptor())) {return "{\"respuesta\" : \"Receptor no encontrado\"}";}
		
		else if(PersonaDB.getBalanceFromId(transferencia.id_emisor()) < transferencia.monto()) {return "{\"respuesta\" : \"Balance insuficiente\"}";}
		
		else if(transferencia.monto()<0) {return "{\"respuesta\" : \"No se puede transferir un monto negativo\"}";}
		
		query = "INSERT INTO `transferencia` (`id`,`monto` ,`id_cliente`,`id_receptor`,`fecha`) VALUES (NULL, ?, ?, ?, ?)";
		DbConnection.dbUpdate(query, new String[]   {Double.toString(transferencia.monto()),
													Integer.toString(transferencia.id_emisor()),
													Integer.toString(transferencia.id_receptor()),"fecha"});;
													
		sumarBalance(-transferencia.monto(), transferencia.id_emisor());
		sumarBalance(transferencia.monto(), transferencia.id_receptor());
													
		return "{\"respuesta\" : \"Transferencia realizada\"}";
	};
	
	public static void sumarBalance(double diferencia, int id) {
		query = "SELECT balance FROM cliente WHERE id = ?";
		resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
		try {
			Double balance = null;
			if (resultados.next()) {balance = resultados.getDouble("balance");}
			DbConnection.actualizar(id, "cliente", "balance", Double.toString(balance + diferencia));
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
	}

	public static ArrayList<OperacionRecord> dBVerTransferencias(int id){
	
		ArrayList<OperacionRecord> transferencias = new ArrayList<OperacionRecord>();
		
		try {
			query = "SELECT transferencia.id, transferencia.monto,\r\n"
					+ "id_cliente as id_emisor, CONCAT(emisor.nombre,' ',emisor.apellido) as nombre_emisor,\r\n"
					+ "id_receptor, CONCAT(receptor.nombre,' ',receptor.apellido) as nombre_receptor,\r\n"
					+ "transferencia.fecha\r\n"
					+ "FROM transferencia, cliente as emisor, cliente as receptor\r\n"
					+ "WHERE id_cliente = emisor.id AND id_receptor = receptor.id";
			
			if(id > 0) {query += "AND transferencia.id = ?";
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			} else {
				resultados = DbConnection.dbSelect(query);
			}
						
			while(resultados.next()) {
				transferencias.add(new OperacionRecord(
						resultados.getInt("id"),
						resultados.getDouble("monto"),
						resultados.getInt("id_emisor"),
						resultados.getString("nombre_emisor"),
						resultados.getInt("id_receptor"),
						resultados.getString("nombre_receptor"), 
						resultados.getString("fecha")
						));
			} 
		} catch (SQLException e) {
		e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
		return transferencias;
	};
	
	public static ArrayList<OperacionRecord> dBVerDepositos(int id){
	
		ArrayList<OperacionRecord> depositos = new ArrayList<OperacionRecord>();

		try {
			query = "SELECT deposito.id as id, monto, id_cliente, CONCAT(nombre, ' ', apellido) as nombre, fecha "
					+ "FROM deposito, cliente WHERE id_cliente = cliente.id";
			
			if(id > 0) { query += "AND deposito.id = ?"; 
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			} else {
				resultados = DbConnection.dbSelect(query);
			}
					
			while(resultados.next()) {
				depositos.add( new OperacionRecord(
						resultados.getInt("id"),
						resultados.getDouble("monto"),
						resultados.getInt("id_cliente"),
						resultados.getString("nombre"),
						resultados.getString("fecha")
						));
			} 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
		return depositos;
	};
	
	public static ArrayList<OperacionRecord> dbVerDepositosCliente(int id) {
		
		ArrayList<OperacionRecord> depositos = new ArrayList<OperacionRecord>();

		try {
			query = "SELECT deposito.id as id, monto, id_cliente, CONCAT(nombre, ' ', apellido) as nombre, fecha "
					+ "FROM deposito, cliente WHERE id_cliente = cliente.id AND cliente.id = ?";
			
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			
			while(resultados.next()) {
				depositos.add( new OperacionRecord(
						resultados.getInt("id"),
						resultados.getDouble("monto"),
						resultados.getInt("id_cliente"),
						resultados.getString("nombre"),
						resultados.getString("fecha")
						));
			} 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
		
		return depositos;
	};
	
	public static ArrayList<OperacionRecord> dbVerTransferenciasCliente(int id) {
		
		ArrayList<OperacionRecord> transferencias = new ArrayList<OperacionRecord>();

		try {
						
			query = "SELECT transferencia.id, transferencia.monto,\r\n"
					+ "id_cliente as id_emisor, CONCAT(emisor.nombre,' ',emisor.apellido) as nombre_emisor,\r\n"
					+ "id_receptor, CONCAT(receptor.nombre,' ',receptor.apellido) as nombre_receptor,\r\n"
					+ "transferencia.fecha\r\n"
					+ "FROM transferencia, cliente as emisor, cliente as receptor\r\n"
					+ "WHERE id_cliente = emisor.id AND id_receptor = receptor.id AND (emisor.id = ? OR receptor.id = ?)";
			
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id),Integer.toString(id)});
			
			while(resultados.next()) {
				transferencias.add(new OperacionRecord(
						resultados.getInt("id"),
						resultados.getDouble("monto"),
						resultados.getInt("id_emisor"),
						resultados.getString("nombre_emisor"),
						resultados.getInt("id_receptor"),
						resultados.getString("nombre_receptor"), 
						resultados.getString("fecha")
						));
			} 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
		return transferencias;
	};
	
	public static ArrayList<OperacionRecord> dbVerTodasOperaciones(int id){
		
		ArrayList<OperacionRecord> operaciones = new ArrayList<OperacionRecord>();

		try {
			
			if(id != 0) {
				query = "SELECT deposito.id as id, monto, id_cliente, CONCAT(nombre, ' ', apellido) as nombre, fecha "
						+ "FROM deposito, cliente WHERE id_cliente = cliente.id AND id_cliente = ? ORDER BY fecha";
				
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			} else {
				query = "SELECT deposito.id as id, monto, id_cliente, CONCAT(nombre, ' ', apellido) as nombre, fecha "
						+ "FROM deposito, cliente WHERE id_cliente = cliente.id ORDER BY fecha";
				
				resultados = DbConnection.dbSelect(query);
			}
			
			while(resultados.next()) {
				operaciones.add(new OperacionRecord(
									resultados.getInt("id"),
									resultados.getDouble("monto"),
									resultados.getInt("id_cliente"),
									resultados.getString("nombre"),
									resultados.getString("fecha")
									)
								);
			};
			
			if (id != 0) {
				query = "SELECT transferencia.id, transferencia.monto,\r\n"
						+ "id_cliente as id_emisor, CONCAT(emisor.nombre,' ',emisor.apellido) as nombre_emisor,\r\n"
						+ "id_receptor, CONCAT(receptor.nombre,' ',receptor.apellido) as nombre_receptor,\r\n"
						+ "transferencia.fecha\r\n"
						+ "FROM transferencia, cliente as emisor, cliente as receptor\r\n"
						+ "WHERE id_cliente = emisor.id AND id_receptor = receptor.id AND (id_cliente = ? OR id_receptor = ?) ORDER BY fecha";
				
				resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id), Integer.toString(id)});
				
			} else {
				query = "SELECT transferencia.id, transferencia.monto,\r\n"
						+ "id_cliente as id_emisor, CONCAT(emisor.nombre,' ',emisor.apellido) as nombre_emisor,\r\n"
						+ "id_receptor, CONCAT(receptor.nombre,' ',receptor.apellido) as nombre_receptor,\r\n"
						+ "transferencia.fecha\r\n"
						+ "FROM transferencia, cliente as emisor, cliente as receptor\r\n"
						+ "WHERE id_cliente = emisor.id AND id_receptor = receptor.id ORDER BY fecha";
				
				resultados = DbConnection.dbSelect(query);
			}
			
			
			while(resultados.next()) {
				operaciones.add(new OperacionRecord(
									resultados.getInt("id"),
									resultados.getDouble("monto"),
									resultados.getInt("id_emisor"),
									resultados.getString("nombre_emisor"),
									resultados.getInt("id_receptor"),
									resultados.getString("nombre_receptor"), 
									resultados.getString("fecha")
									)		
								);
			};
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
		return operaciones;
	}

}
