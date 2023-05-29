package practica3;
import java.util.Scanner;

public class Gestor extends Persona {

	
	private int salario = 1500;
	
	public void aumento(int cantidad) {
		salario += cantidad;
	}
	
	public Gestor login(String usuario, String contraseña){
		if(usuario.equals(this.usuario) && contraseña.equals(this.contraseña) && this.cuenta) {
			System.out.println("Login correcto");
			return this;
		} else {
			return null;
		}
	};
	
	//get
	public int getSalario() {
		return this.salario;
	}
	//set
	public void setSalario(Scanner sc) {
		System.out.println("Ingrese el salario");
		int salario = sc.nextInt();
		this.salario = salario;
	};
	
	
	
	//constructores
	
	public Gestor() {
		super();
		Banco.gestores.add(this);
	};
	public Gestor(String nombre, String usuario, String contraseña) {
		super(nombre, usuario, contraseña);
		Banco.gestores.add(this);
	}
	public Gestor(String nombre, String usuario, String contraseña, int salario) {
		super(nombre, usuario, contraseña);
		this.salario = salario;
		Banco.gestores.add(this);
	}
	
}
