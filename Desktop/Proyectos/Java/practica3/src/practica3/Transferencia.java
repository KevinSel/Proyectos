package practica3;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Transferencia extends Banco {
	
	public static int idContador;
	private int cantidad;
	private Cliente parteA;
	private Cliente parteB = null;
	
	public int getCantidad(){
		return this.cantidad;
	}
	
	public Cliente getParteA(){
		return this.parteA;
	}
	
	public Cliente getParteB(){
		return this.parteB;
	}
	
	public void getInfo(){
		if (parteB == null) {
			System.out.println("\n ID: " + this.id + " Cantidad: " + this.cantidad + " Emisor: " + this.parteA.getNombre());
		}
		else {
			System.out.println("\n ID: " + this.id + " Cantidad: " + this.cantidad + " Emisor: " + this.parteA.getNombre() + "Receptor: " + this.parteB.getNombre());
		}
	};
		
	public Transferencia(Scanner sc, Cliente parteA) {
		
		System.out.println("Monto positivo para depositar, negativo para extraer. Monto: ");
		try{
			this.cantidad = sc.nextInt();
			if(-1*this.cantidad > parteA.getBalance()) {
				throw new ArithmeticException("Error");
			}
		}
		catch(InputMismatchException e) {
			System.out.println("Debe ingresar un numero");
			return;
		}
		catch(ArithmeticException e) {
			System.out.println("Saldo insuficiente");
			return;
		};
		parteA.depositoOExtraccion(cantidad);
		
		this.parteA = parteA;
		this.id = Transferencia.idContador;
		Transferencia.idContador ++;
		Banco.transferencias.add(this);
		
		System.out.println("\nTransferencia realizada con exito\n");
		this.getInfo();
	}
	
	public Transferencia(Scanner sc, Cliente parteA, Cliente parteB) {
		
		System.out.println("Monto: ");
		try{
			this.cantidad = sc.nextInt();
			parteA.depositoOExtraccion(-1*cantidad);
			parteB.depositoOExtraccion(cantidad);
			if (this.cantidad<0) {
				throw new ArithmeticException("Error");
			} 
		}
		catch(InputMismatchException e) {
			System.out.println("Debe ingresar un numero");
			return;
		}
		catch(ArithmeticException e) {
			System.out.println("Debe ingresar un monto positivo");
			return;
		}
		catch(NullPointerException e) {
			System.out.println("Receptor no encontrado");
			return;
		}
		
		
		this.parteA = parteA;
		this.parteB = parteB;
		this.id = Transferencia.idContador;
		Transferencia.idContador ++;
		Banco.transferencias.add(this);
		
		System.out.println("\nTransferencia realizada con exito\n");
		this.getInfo();
	}
}
