package com.spring.practica4;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ClienteDB extends PersonaDB {

	public static void sumarBalance(double diferencia, int id) {
		String query = "SELECT balance FROM cliente WHERE id = ?";
		ResultSet resultados;
		try {
			resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
			Double balance = null;
			if (resultados.next()) {balance = resultados.getDouble("balance");}
			DbConnection.actualizar(id, "cliente", "balance", Double.toString(balance + diferencia));
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {DbConnection.cerrarDb();}
	}
	
}
