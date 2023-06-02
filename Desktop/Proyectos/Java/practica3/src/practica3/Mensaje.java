package practica3;
import java.util.Scanner;

public class Mensaje {
	
	private String mensaje;
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
		if (this.receptor == null) {
			System.out.println("Mensaje: " + this.mensaje + " Autor: " + this.emisor.getNombre() + " Receptor: EL BANCO" + " ID : " + Banco.mensajes.indexOf(this));
		} else {
			System.out.println("Mensaje: " + this.mensaje + " Autor: " + this.emisor.getNombre() + " Receptor: " + this.receptor.getNombre() + " ID : " + Banco.mensajes.indexOf(this));
	};
		}
		

	public Mensaje( Scanner sc, Persona emisor) {
		this.emisor = emisor;
		System.out.println("Ingresa tu mensaje");
		this.mensaje = sc.next();
		System.out.println("¿Para quien es? - Si es para el banco, ingresa 1");
		String nombre = sc.next();
		for( Gestor gestor : Banco.gestores) {
			if (Banco.gestores.indexOf(gestor)>0) {
				if (gestor.getNombre().equals(nombre)) {
					this.receptor = gestor;
				}
			}
		}
		for( Cliente cliente : Banco.clientes) {
			if (cliente.getNombre().equals(nombre)) {
				this.receptor = cliente;
			}
		}
		Banco.mensajes.add(this);
	}
		
}

