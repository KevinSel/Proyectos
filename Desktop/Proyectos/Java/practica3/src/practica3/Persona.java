package practica3;
import java.util.Scanner; 

public class Persona {
	

	protected String nombre;
	protected Boolean cuenta = false;
	protected String usuario;
	protected String contraseña;
	
	
	//get
	public boolean getCuenta() {
		return this.cuenta;
	}
	public String getNombre() {
		return this.nombre;
	};
	public String getUsuario() {
		return this.usuario;
	};
	
	//set
	public void setNombre(Scanner sc) {
		System.out.println("Ingrese el nombre");
		String nombre = sc.next();
		this.nombre = nombre;
	};
	public void setUsuario(Scanner sc) {
		System.out.println("Ingrese el usuario");
		String usuario = sc.next();
		this.usuario = usuario;
	};
	public void setContraseña(Scanner sc) {
		System.out.println("Ingrese la contraseña");
		String contraseña = sc.next();
		this.contraseña = contraseña;
	}
	
	//Ver mis mensajes
	public void verMensajes() {
		for (Mensaje mensaje : Banco.mensajes) {
			if (mensaje.getEmisor() == this || mensaje.getReceptor() == this) {
				mensaje.getInfo();
			}
		}
	}
	//Ver mis transferencias
	public void verTransferencias() {
		for (Transferencia transferencia : Banco.transferencias) {
			if (transferencia.getParteA() == this || transferencia.getParteB() == this) {
				transferencia.getInfo();
			}
		}
	}
	
	//Registro
	public void registrar(String usuario, String contraseña) {
		this.usuario = usuario;
		this.contraseña = contraseña;
		this.cuenta = true;
		System.out.println("Usuario registrado correctamente. Usuario: " +  this.usuario + " contraseña: " + this.contraseña);
	};

	
	//Constructores
	public Persona(){
	}
	public Persona(String nombre) {
		this.nombre = nombre;
	}
	public Persona(String nombre, String usuario, String contraseña) {
		this.usuario = usuario;
		this.contraseña = contraseña;
		this.nombre = nombre;
		this.registrar(usuario, contraseña);
	}

}
 