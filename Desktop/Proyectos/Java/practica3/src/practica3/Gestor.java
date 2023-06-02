package practica3;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Gestor extends Persona {

	private int salario;
	public void aumento(int cantidad) {
		salario += cantidad;
	}
	
	public void getInfo() {
		System.out.println("\nGESTOR ID: " + this.id + " Nombre: " + this.nombre + " Usuario: " + this.usuario + " Salario: " + this.salario + "\n");
	}
	
	public int getSalario() {
		return this.salario;
	}

	public void setSalario(Scanner sc) {
		System.out.println("Ingrese el salario");
		
		try {int salario = sc.nextInt();}
		catch(InputMismatchException e){
			System.out.println("Debe ingresar un numero");
			return;
		}
		
		this.salario = salario;
		System.out.println("Salario actualizado: " + this.salario);
		
	};
	
	public Gestor(String nombre, String usuario, String contraseña) {
		super(nombre, usuario, contraseña);
		System.out.println("Gestor: ");
		this.salario = 1500;
		Banco.gestores.add(this);
	}
}
