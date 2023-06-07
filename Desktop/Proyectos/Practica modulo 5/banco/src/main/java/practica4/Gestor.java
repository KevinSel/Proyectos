package practica4;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Gestor extends Persona {

	private double salario;
	
	@Override
	public void getInfo() {
		super.getInfo();
		System.out.println("\nTipo de cuenta: " + "cliente");
		System.out.println("\nBalance: " + this.salario);
		verMisClientes();
	}
	
	public double getSalario() {
		return this.salario;
	};
	
	public void cambiarSalario(Double diferencia) {
		diferencia = GestorDB.dbCambioSalario(diferencia, this.getId());
		this.salario += diferencia;
		System.out.println("\nSalario: +" + diferencia);
	};
	
	public void verMisClientes() {
		System.out.println("\nMis clientes: \n");
		GestorDB.dbVerClientesDeGestor(this.getId());
	};
	
	public Gestor(int id, String nombre, String apellido, String usuario, double salario) {
		super(id, nombre, apellido, usuario);
		this.esGestor = true;
		this.salario = salario;
	}
}
