package com.spring.practica4;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class OperacionesDB {
	
	private static String query;
	private static ResultSet resultados;
	
	public static void dBNuevoDeposito(int id, double monto){				
		query = "INSERT INTO `deposito` VALUES (NULL, ?, ?, ?)";
		DbConnection.dbUpdate(query, new String[] {Integer.toString(id),Double.toString(monto), "fecha"});
	};
	
	public static void dBNuevaTransferencia(String receptor, int id_receptor, int id_emisor, double monto){
		
		try {
			query = "SELECT id FROM cliente WHERE usuario LIKE ?";
			resultados = DbConnection.dbSelect(query, new String[] {receptor});
			if(resultados.next()) {
				id_receptor = resultados.getInt("id");
			} else {
				System.out.println("Usuario no encontrado");
				return;
			};
			
			query = "INSERT INTO `transferencia` (`id`,`monto` ,`id_cliente`,`id_receptor`,`fecha`) VALUES (NULL, ?, ?, ?, ?)";
			DbConnection.dbUpdate(query, new String[] {Double.toString(monto),Integer.toString(id_emisor), Integer.toString(id_receptor),"fecha"});
			
			ClienteDB.dbSumarBalance(id_emisor, -monto);
			ClienteDB.dbSumarBalance(id_receptor, monto);
			
			
		} catch (SQLException e) {	
			e.printStackTrace();
		};
		
		
	};
	
	public static void dBVerTransferenciaPorId(Scanner sc){
		int id = main.obtenerIdPorConsola(sc);

		System.out.println("\nTransferencias: ");
		try {
			query = "SELECT *, emisor.nombre as nombre_e, emisor.apellido as apellido_e, receptor.nombre as nombre_r, receptor.apellido as apellido_r FROM"
					+ " transferencia, cliente as emisor, cliente as receptor WHERE id_cliente = emisor.id AND id_receptor = receptor.id AND transferencia.id = ?";
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.print("Monto: " + resultados.getDouble("monto"));
				System.out.println("Emisor: " + resultados.getString("nombre_e") + " " + resultados.getString("apellido_e"));
				System.out.println("Receptor: " + resultados.getString("nombre_r") + " " + resultados.getString("apellido_r"));
				System.out.println("Monto: " + resultados.getDouble("monto"));}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
	};
	
	public static void dBVerDepositoPorID(Scanner sc){
		int id = main.obtenerIdPorConsola(sc);
		try {
			query = "SELECT *, nombre, apellido FROM deposito, cliente WHERE deposito.id = ? AND id_cliente = cliente.id";
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			if(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Cliente: " + resultados.getString("nombre") + " " + resultados.getString("apellido"));
				System.out.println("Monto: " + resultados.getDouble("monto"));
				System.out.println("Fecha: " + resultados.getString("fecha"));
			} else {
				System.out.println("Deposito no encontrado");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
	};
	
	public static void dbVerOperacionesCliente(int id) {
		try {
			query = "SELECT *, nombre, apellido FROM deposito, cliente WHERE id_cliente = cliente.id AND id_cliente = ?";
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			System.out.println("\nDepositos: ");
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Cliente: " + resultados.getString("nombre") + " " + resultados.getString("apellido"));
				System.out.println("Monto: " + resultados.getDouble("monto"));
				System.out.println("Fecha: " + resultados.getTimestamp("fecha"));
			}
			query = "SELECT *, emisor.nombre as nombre_e, emisor.apellido as apellido_e, receptor.nombre as nombre_r, receptor.apellido as apellido_r"
					+ " FROM transferencia, cliente as emisor, cliente as receptor WHERE id_cliente = emisor.id AND id_receptor = receptor.id AND (id_cliente = ? OR id_receptor = ?)";
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id), Integer.toString(id)});
			System.out.println("\nTransferencias: ");
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Monto: " + resultados.getDouble("monto"));
				System.out.println("Emisor: " + resultados.getString("nombre_e") + " " + resultados.getString("apellido_e"));
				System.out.println("Receptor: " + resultados.getString("nombre_r") + " " + resultados.getString("apellido_r"));
				System.out.println("Fecha: " + resultados.getTimestamp("fecha"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
	};
	
	public static void dbVerTodasOperaciones(){
		try {
			query = "SELECT *, nombre, apellido FROM deposito, cliente WHERE id_cliente = cliente.id";
			resultados = DbConnection.dbSelect(query);
			System.out.println("\nDepositos y extracciones: ");
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Cliente: " + resultados.getString("nombre") + " " + resultados.getString("apellido"));
				System.out.println("Monto: " + resultados.getDouble("monto"));
				System.out.println("Fecha: " + resultados.getString("fecha"));
			};
			query = "SELECT * FROM transferencia";
			resultados = DbConnection.dbSelect(query);
			System.out.println("\nTransferencias: ");
			while(resultados.next()) {
				System.out.println("ID: " + resultados.getInt("id"));
				System.out.println("Monto: " + resultados.getDouble("monto"));
				System.out.println("ID Emisor: " + resultados.getInt("id_cliente"));
				System.out.println("ID Receptor: " + resultados.getInt("id_receptor"));
				System.out.println("Fecha: " + resultados.getString("fecha"));
			};
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		}
	}
	
}
