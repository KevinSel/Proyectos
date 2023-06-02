package practica3;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner; 

public class Cliente extends Persona {
	
	private int balance;
	
	public void depositoOExtraccion(int cantidad) {
		this.balance += cantidad;
		Banco.balanceBanco += cantidad;
	};
	
	public void agregarBalance(int balance) {
		this.balance += balance;
	};
	
	public int getBalance() {
		return this.balance;
	};
	
	public void getInfo() {
		System.out.println("\nCLIENTE ID: " + this.id + " Nombre: " + this.nombre + " Usuario: " + this.usuario + " Balance: " + this.balance + "\n");
	}
	
	public void setBalance(Scanner sc) {
		System.out.println("Ingrese el balance");
		
		try {int balance = sc.nextInt();}
		catch(InputMismatchException e){
			System.out.println("Debe ingresar un numero");
			return;
		};
		
		this.balance = balance;
		System.out.println("Balance actualizado: " + this.balance);
		
	};
	
	public Cliente(String nombre, String usuario, String contraseña, int balance) {
		super(nombre, usuario, contraseña);
		this.balance = balance;
		Banco.clientes.add(this);
	}
	
	
}
