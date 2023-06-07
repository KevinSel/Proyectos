package practica4;

import java.util.Scanner;

public class ClienteDB extends PersonaDB {

	public static void dbSetBalance(Scanner sc, int id) {
		System.out.println("Ingrese el balance");
		double balance = main.obtenerDoublePorConsola(sc);
		String query = "UPDATE `cliente` SET balance = (?) WHERE `id` = ?";
		DbConnection.dbUpdate(query, new String[] {Double.toString(balance), Integer.toString(id)});
	};
	
	public static void dbSumarBalance(int id, double monto) {
		String query = "UPDATE `cliente` SET balance = balance + (?) WHERE `id` = ?";
		DbConnection.dbUpdate(query, new String[] {Double.toString(monto), Integer.toString(id)});
	};
	
	
}
