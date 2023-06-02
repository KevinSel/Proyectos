package practica3;
import java.util.Scanner;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
import java.util.Random;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int respuesta;
		String usuario = "";
		String nombre = "";
		String contraseña = "";
		Mensaje mensaje;
		Transferencia transferencia;
		Cliente cliente;
		Gestor gestor = new Gestor("admin","admin","admin");
		gestor.remover(Banco.gestores);
		Scanner sc = new Scanner(System.in);
		
		//Objetos de prueba
		new Gestor("lucas", "lucas", "lucas123");
		new Gestor("adelina", "adelina", "adelina123");
		new Gestor("adrian", "adrian", "adrian123");
		new Cliente("jose", "jose", "jose123", 1500);
		new Cliente("maria", "maria", "maria123", 1000);
		new Cliente("laura", "laura", "laura123", 50000);
		//Programa.
		
		program:
		while(true) {
			
			boolean esGestor = false;
			Cliente cuenta = null;
			Gestor cuentaGestor = null;
			Cliente persona = null;
			System.out.println("¡Bienvenido!");
			
			boolean ingresado = false;
			while(!ingresado) {
				
				respuesta = menuNumeros(sc, new String[] {"Cerrar programa", "Iniciar sesion","Registrarse"});		
				
				flag:
				switch (respuesta) {
				case 0: break program;
				case 1: 
					System.out.println("Usuario:");
					usuario = sc.next();
					System.out.println("Contraseña:");
					contraseña = sc.next();
					for (Cliente user : Banco.clientes) {
						cuenta = (Cliente) user.login(usuario, contraseña);
						if (cuenta != null) { ingresado = true; break flag;};
					}
					for (Gestor user : Banco.gestores) {
						cuentaGestor = (Gestor) user.login(usuario, contraseña);
						if (cuentaGestor != null) { ingresado = true; esGestor = true; break flag;};
					}
					System.out.println("Usuario o contraseña incorrecto");
				break;
				case 2:
					registrar(sc,false);
				};
			};
			

			inicio:
			while(true) {
				if (esGestor) {
					respuesta = menuNumeros(sc, new String[] {"Salir","Gestores","Clientes","Transacciones","Mensajes"});	
					switch (respuesta) {
					case 0: continue program;
					case 1: respuesta = menuNumeros(sc, new String[] {"Volver","Agregar gestor","Obtener gestor","Obtener gestores","Actualizar gestor","Agregar gestores"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1:	registrar(sc,true); cuentaGestor.aumento(100); break;
						case 2: 
							gestor = (Gestor) getById(sc, Banco.gestores);
							if (gestor != null) {gestor.getInfo();}
						break;
						case 3: 
							for (Gestor personaLoop : Banco.gestores) {
								personaLoop.getInfo();
							};
						break;
						case 4: 
							gestor = (Gestor) getById(sc, Banco.gestores);
							if (gestor == null) {
								System.out.println("Gestor no encontrado");
								break;
							}
							respuesta = menuNumeros(sc, new String[] {"Volver","Actualizar usuario","Actualizar contraseña","Actualizar salario","Eliminar gestor"});
							switch(respuesta) {
							case 0: continue inicio;
							case 1:gestor.setNombre(sc); break;
							case 2:gestor.setUsuario(sc); break;
							case 3:gestor.setContraseña(sc); break;
							case 4:gestor.setSalario(sc); break;
							case 5:gestor.remover(Banco.gestores);
							};
						break;
						case 5: 
							System.out.println("Cantidad de gestores a producir de forma masiva: ");
							respuesta = respuestaCorrecta(sc,999);
							agregarGestores(sc, respuesta);		
						};
					break;	
					case 2: 
						respuesta = menuNumeros(sc,new String[] {"Volver","Agregar cliente","Obtener cliente","Obtener clientes","Actualizar cliente"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1:	registrar(sc,false); cuentaGestor.aumento(200);break;
						case 2:
							cliente = (Cliente) getById(sc,Banco.clientes);
							if (cliente != null) {cliente.getInfo();}
						break;
						case 3: 
							for (Cliente personaLoop : Banco.clientes) {
								personaLoop.getInfo();
						};break;
						case 4: 
							respuesta = menuNumeros(sc,new String[] {"Volver","Actualizar nombre","Actualizar usuario","Actualizar contraseña","Actualizar balance","Eliminar cliente"});
							cliente = (Cliente) getById(sc,Banco.clientes);
							switch(respuesta) {
							case 0: continue inicio;
							case 1:cliente.setNombre(sc); break;
							case 2:cliente.setUsuario(sc); break;
							case 3:cliente.setContraseña(sc); break;
							case 4:cliente.setBalance(sc); break;
							case 5:cliente.remover(Banco.clientes); break;
							};
						};
						break;
						
					case 3:
						respuesta = menuNumeros(sc,new String[] {"Volver", "Obtener transaccion","Obtener transacciones"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1: 
							transferencia = (Transferencia) getById(sc, Banco.transferencias);
							if (transferencia != null) {transferencia.getInfo();}; break;
						case 2:
							for (Transferencia transferenciaLoop : Banco.transferencias) {
								transferenciaLoop.getInfo();
							};
						}break;
						case 4: 
							respuesta = menuNumeros(sc, new String[] {"Volver","Enviar mensaje","Ver mensaje","Ver todos los mensajes","Ver mis mensajes"});
							switch(respuesta) {
							case 0: continue inicio;
							case 1: new Mensaje(sc, cuentaGestor); break;
							case 2: 
								transferencia = (Transferencia) getById(sc, Banco.transferencias);
								if (transferencia != null) {transferencia.getInfo();}

							break;
							case 3:
								for(Mensaje mensajeLoop : Banco.mensajes) {
									mensajeLoop.getInfo();
								}; 
							break;
							case 4: cuentaGestor.verMensajes();
							};								
					};	
				};
				
		
				if (!esGestor) {
					respuesta = menuNumeros(sc, new String[] {"Salir","Balance","Operacion","Ver mis operaciones","Enviar mensaje","Mis mensajes","Cuenta"});
					switch(respuesta) {
					case 0: continue program;
					case 1: System.out.println("BALANCE: " + cuenta.getBalance()); break;
					case 2:
						respuesta = menuNumeros(sc, new String[] {"Volver", "Deposito/Extraccion", "Transferencia"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1: new Transferencia(sc, cuenta); break;
						case 2: 
							System.out.println("¿Para quien es?");
							nombre = sc.next();
							for(Cliente clienteLoop : Banco.clientes) {
								if (clienteLoop.getNombre().equals(nombre)) {
									persona = clienteLoop;
									break;
								}
							}
							new Transferencia(sc, cuenta, persona); 
						};
					break;
					case 3: 
						for (Transferencia operacion : Banco.transferencias) {
							if (operacion.getParteA() == cuenta || operacion.getParteB() == cuenta) {
							operacion.getInfo();
							};
						}; break;
					case 4: new Mensaje(sc, cuenta); break;
					case 5: cuenta.verMensajes(); break;
					case 6: 
						respuesta = menuNumeros(sc, new String[] {"Volver","Cambiar usuario","Cambiar contraseña","Eliminar cuenta"});
						switch (respuesta) {
							case 0: continue inicio;
							case 1: cuenta.setUsuario(sc); break;
							case 2: cuenta.setContraseña(sc);break;
							case 3: cuenta.remover(Banco.clientes); continue program;
						};
					};
				};
			}
		};
		sc.close();
	};
	
	public static int menuNumeros(Scanner sc, String[] opciones) {
		String menu = "\nElige una opcion ingresando un numero\n";
		for(int i = 1; i<opciones.length; i++) {
			menu += i + " --> " + opciones[i] + "\n";
		}
		menu += "0 --> " + opciones[0];
		System.out.println(menu);
		return respuestaCorrecta(sc,opciones.length - 1);
	};
	
	public static int respuestaCorrecta(Scanner sc, int max){
		
		boolean numeroValido = false;
		int respuesta = -1;
		
		while(!numeroValido) {
			try {
				respuesta = sc.nextInt();
				if (respuesta <= max && respuesta > -1) {
					System.out.println("Opcion " + respuesta + " ingresada correctamente\n");
					numeroValido = true;
				} else {
					System.out.println("La opcion ingresada es incorecta\n"
							+ "Ingresar numero: \n");
				};
			}
			catch (Exception InputMismatchException) {
				System.out.println("Por favor, ingresa un numero");
				sc.next();
			}

		};
		return respuesta;
	};

	public static Banco getById(Scanner sc, ArrayList<? extends Banco> array) {
		System.out.println("\nIngrese un ID \n");
		int id = respuestaCorrecta(sc, 9999999);
		
		for (Banco enArray : array) {
			if (enArray.getId() == id) {
				return enArray;
			};
		};
		
		System.out.println("\nNo se ha encontrado un objeto para el ID ingresado.\n");
		return null;}
	
	public static int getId(Banco identificar) {
		return identificar.getId();
	}
	
	public static boolean registrar(Scanner sc, boolean gestor){
		
		System.out.println("Nombre: ");
		String nombre = sc.next();
		System.out.println("Usuario: ");
		String usuario = sc.next();
		System.out.println("Contraseña: ");
		String contraseña = sc.next();
		
		for (Cliente user : Banco.clientes) {
			if (user.getUsuario().equals(usuario)) {
				System.out.println("Usuario ya registrado");
				return false;
			}
		};
		
		for (Gestor user : Banco.gestores) {
			if (user.getUsuario().equals(usuario)) {
				System.out.println("Usuario ya registrado");
				return false;
			}
		};
		
		if (gestor) {
			new Gestor(nombre,usuario,contraseña);
		} else {
			new Cliente(nombre,usuario,contraseña, 0);
		};
		return true;
	}
	
	public static void  agregarGestores(Scanner sc, int cantidad) {
		Random rand = new Random();
		String nombre;
		String usuario;
		String contraseña; 
		for (int i=0; i<cantidad; i++ ) {
			nombre = "GestorAleatorio" + rand.nextInt(10000);
			usuario = rand.nextInt(10000) + "GestorAleatorio";
			contraseña = rand.nextInt(50000) + "¿?¿??TokenDeSeguridadInquebrantable!=·%/()·" + rand.nextInt(50000);
			new Gestor(nombre, usuario, contraseña);
		};
		
	};
	
	
}
