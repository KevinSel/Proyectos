package practica3;
import java.util.Scanner; 

public class Cliente extends Persona {
	
	private int balance;
	
	public Cliente login(String usuario, String contraseña){
		if(usuario.equals(this.usuario) && contraseña.equals(this.contraseña) && this.cuenta) {
			System.out.println("Login correcto");
			return this;
		} else {
			return null;
		}
	};
	
	public void agregarBalance(int balance) {
		this.balance += balance;
	}
	
	public void depositoOExtraccion(int cantidad) {
		this.balance += cantidad;
		Banco.balance += cantidad;
	}
	
	public int getBalance() {
		return this.balance;
	};
	
	public void setBalance(Scanner sc) {
		System.out.println("Ingrese el balance");
		int balance = sc.nextInt();
		this.balance = balance;
	}
	
	//Constructores
	public Cliente(String nombre, String usuario, String contraseña) {
		super(nombre, usuario, contraseña);
		Banco.clientes.add(this);
	}
	public Cliente(String nombre, String usuario, String contraseña, int balance) {
		super(nombre, usuario, contraseña);
		this.balance = balance;
		Banco.clientes.add(this);
	}
	
	
}
