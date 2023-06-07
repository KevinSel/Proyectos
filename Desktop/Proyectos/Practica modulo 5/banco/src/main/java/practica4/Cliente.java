package practica4;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner; 

public class Cliente extends Persona {
	
	private double balance;
	private int idGestor;
	
	public double getBalance() {
		return this.balance;
	};
	
	public void nuevoDeposito(Scanner sc) {
		System.out.println("Monto (Negativo para extraer, positivo para depositar): ");
		double monto = main.obtenerDoublePorConsola(sc);
		if(monto<-balance) {
			System.out.println("Balance insuficiente");
			return;
		} else if (monto < -10000) {
			System.out.println("No se permiten extraciones mayores a 10.000");
			return;
		}
		OperacionesDB.dBNuevoDeposito(this.id,monto);
		ClienteDB.dbSumarBalance(this.id, monto);
		this.balance += monto;
		System.out.println("Operacion finalizada");
	}
	
	public void nuevaTransferencia(Scanner sc) {
		int id_receptor = 0;
		System.out.println("Ingrese el nombre de usuario del receptor");
		String receptor = sc.next();
		System.out.println("Ingrese el monto a transferir");
		double monto = main.obtenerDoublePorConsola(sc);
		if(monto > balance || monto < 0) {
			System.out.println("No puede ingresar un monto negativo o mayor a su balance");
			return;
		};
		
		OperacionesDB.dBNuevaTransferencia(receptor, id_receptor, this.id, monto);
		this.balance -= monto;
		System.out.println("Transferencia finalizada");
		
	};
	
	@Override
	public void getInfo() {
		super.getInfo();
		System.out.println("\nTipo de cuenta: " + "cliente");
		System.out.println("\nBalance: " + this.balance);
		System.out.println("\n\nGestor: ");
		PersonaDB.dbGetPersonaPorId(idGestor, "gestor");
	}

	public Cliente(int id, int idGestor, String nombre, String apellido,  String usuario, double balance) {
		super(id, nombre, apellido, usuario);
		this.esGestor = false;
		this.idGestor = idGestor;
		this.balance = balance;
	}
	
	
}
