package practica4;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class GestorDB {

	private static ResultSet resultados;

	public static void dbSetSalario(Scanner sc, int id) {
		System.out.println("Ingrese el salario");
		double balance = main.obtenerDoublePorConsola(sc);
		String query = "UPDATE `gestor` SET salario = (?) WHERE `id` = ?";
		DbConnection.dbUpdate(query, new String[] {Double.toString(balance), Integer.toString(id)});
	};
	
	public static Double dbCambioSalario(Scanner sc) {
		int id = main.obtenerIdPorConsola(sc);
		System.out.println("Ingrese la diferencia");
		double diferencia = main.obtenerDoublePorConsola(sc);
		String query = "UPDATE gestor SET salario = balance + (?) WHERE id = (?);";
		DbConnection.dbUpdate(query,new String[] {Double.toString(diferencia), Integer.toString(id)});
		return null;
	}
	
	public static Double dbCambioSalario(Double diferencia, int id) {
		String query = "UPDATE gestor SET salario = salario + (?) WHERE id = (?);";
		DbConnection.dbUpdate(query,new String[] {Double.toString(diferencia), Integer.toString(id)});
		return diferencia;
	}
	
	public static void dbVerClientesDeGestor(int id){
		String query = "SELECT * FROM cliente WHERE id_gestor = ?";
		resultados = DbConnection.dbSelect(query, new String[] {Integer.toString(id)});
		try {
			while(resultados.next()) {
				System.out.println("ID: "+resultados.getInt("id"));
				System.out.println("Nombre: "+resultados.getString("nombre")+" "+resultados.getString("apellido"));
				System.out.println("Usuario: "+resultados.getString("usuario"));
				System.out.println("Balance: "+resultados.getString("balance")+"\n");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DbConnection.cerrarDb();
		};
	}
	
}
