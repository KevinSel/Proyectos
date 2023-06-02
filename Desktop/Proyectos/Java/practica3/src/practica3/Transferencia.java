package practica3;
import java.util.Scanner;

public class Transferencia {
	
	private int cantidad;
	private Cliente parteA;
	private Cliente parteB;
	private boolean deposito = false;
	
	public int getCantidad(){
		return this.cantidad;
	}
	public Cliente getParteA(){
		return this.parteA;
	}
	public Cliente getParteB(){
		return this.parteB;
	}
	public void getInfo() {
		if (this.deposito) {
			System.out.println("Tipo: DEPOSITO/EXTRACCION" + " Cantidad: " + this.cantidad + " Autor: " + parteA.getNombre() + "ID :" + Banco.transferencias.indexOf(this));
		} else {
			System.out.println("Tipo: TRANSFERENCIA" + " Cantidad: " + this.cantidad + " Receptor: " + parteB.getNombre() + " Emisor: " + parteA.getNombre() + " ID : " + Banco.transferencias.indexOf(this));
		}
	}
	
	public Transferencia(Scanner sc, Cliente parteA) {
		this.deposito = true;
		System.out.println("Monto positivo para depositar, negativo para extraer. Monto: ");
		this.cantidad = sc.nextInt();
		if(-1*this.cantidad > parteA.getBalance()) {return;}
		parteA.depositoOExtraccion(cantidad);
		this.parteA = parteA;
		Banco.transferencias.add(this);
	}
	public Transferencia(Scanner sc, Cliente parteA, Cliente parteB) {
		this.parteA = parteA;
		this.parteB = parteB;
		System.out.println("Monto: ");
		int monto = sc.nextInt();
		this.cantidad = monto;
		if (monto<0) {
			return;}
		parteA.depositoOExtraccion(-1*cantidad);
		parteB.depositoOExtraccion(cantidad);
		Banco.transferencias.add(this);
	}
}
