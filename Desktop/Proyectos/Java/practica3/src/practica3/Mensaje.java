package practica3;
import java.util.Scanner;

public class Mensaje extends Banco{
	
	private String mensaje;
	private String nombreReceptor;
	private Persona emisor;
	private Persona receptor;
	
	public String getMensaje(){
		return this.mensaje;
	}
	
	public Persona getEmisor(){
		return this.emisor;
	}
	
	public Persona getReceptor(){
		return this.receptor;
	}
	
	public void getInfo() {
		System.out.println("\nID: " + this.id + " Emisor: " + this.emisor.getNombre() + " Receptor: " + this.nombreReceptor + " Mensaje: " + this.mensaje + "\n");
	}
	
	public Mensaje( Scanner sc, Persona emisor) {
		this.emisor = emisor;
		System.out.println("Ingresa tu mensaje");
		this.mensaje = sc.next();
		System.out.println("¿Para quien es? - Si es para el banco, ingresa B");
		String nombre = sc.next();
		this.nombreReceptor = "EL BANCO";
		
		for( Gestor gestor : Banco.gestores) {
			if (gestor.getNombre().equals(nombre)) {
				this.receptor = gestor;
				this.nombreReceptor  = gestor.getNombre();
				nombre = "B";
			};
		};
	
		for( Cliente cliente : Banco.clientes) {
			if (cliente.getNombre().equals(nombre)) {
				this.receptor = cliente;
				this.nombreReceptor  = cliente.getNombre();
				nombre = "B";
			}
		}
	
		if (!nombre.equals("B")) {
			System.out.println("\nReceptor no encontrado\n");
			return;
		}
		Banco.mensajes.add(this);
		
		System.out.println("\nMensaje enviado\n");
		this.getInfo();
	}
	
}

 