package practica3;
import java.util.Scanner; 

public class Persona extends Banco{
	
	static public int personasId;
	protected String nombre;
	protected String usuario;
	protected String contraseña;	
	
	public Persona login(String usuario, String contraseña){
		if(usuario.equals(this.usuario) && contraseña.equals(this.contraseña)) {
			System.out.println("Login correcto");
			return this;
		} else {
			return null;
		}
	};
	
	public String getNombre() {
		return this.nombre;
	};
	
	public String getUsuario() {
		return this.usuario;
	};
	
	public void setNombre(Scanner sc) {
		System.out.println("Ingrese el nombre");
		String nombre = sc.next();
		this.nombre = nombre;
		System.out.println("\nNombre actualizado: " + this.nombre);
	};
	
	public void setUsuario(Scanner sc) {
		System.out.println("Ingrese el usuario");
		String usuario = sc.next();
		this.usuario = usuario;
		System.out.println("\nUsuario actualizado: " + this.usuario);
	};
	
	public void setContraseña(Scanner sc) {
		System.out.println("Ingrese la contraseña");
		String contraseña = sc.next();
		this.contraseña = contraseña;
		System.out.println("\nContraseña actualizada: " + this.contraseña);
	};
	
	public void verMensajes() {
		System.out.println("\nMensajes: \n");
		for (Mensaje mensaje : Banco.mensajes) {
			if (mensaje.getEmisor() == this || mensaje.getReceptor() == this) {
				mensaje.getInfo();
			}
		}
	};
	
	public void verTransferencias() {
		System.out.println("\nTransferencias: \n");
		for (Transferencia transferencia : Banco.transferencias) {
			if (transferencia.getParteA() == this || transferencia.getParteB() == this) {
				transferencia.getInfo();
			}
		}
	};
	
	public Persona(String nombre, String usuario, String contraseña) {
		
		Persona.personasId ++;
		this.id = Persona.personasId;
		
		this.usuario = usuario;
		this.contraseña = contraseña;
		this.nombre = nombre;
		
		System.out.println("\nUsuario registrado correctamente");
		this.getInfo();

	};
}
 