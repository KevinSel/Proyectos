package practica3;
import java.util.Scanner;  
import java.util.Random;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int respuesta = -1;
		int id = -1;
		String usuario = "";
		String nombre = "";
		String contraseña = "";
		Scanner sc = new Scanner(System.in);
		Gestor dueño = new Gestor();
		dueño.registrar("admin","admin");
		
		//Objetos de prueba
		new Gestor("lucas", "lucas", "lucas123", 1000);
		new Gestor("adelina", "adelina", "adelina123", 2000);
		new Gestor("adrian", "adrian", "adrian123", 2000);
		
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
				System.out.println("Elige una opcion ingresando un numero \n"
						+ "1 --> Iniciar sesion \n"
						+ "2 --> Registrarse \n"
						+ "0 --> cerrar programa \n");
				respuesta = respuestaCorrecta(2,sc);
				
				flag:
				switch (respuesta) {
					case 0: break program;
					case 1: 
							System.out.println("Usuario:");
							usuario = sc.next();
							System.out.println("Contraseña:");
							contraseña = sc.next();
							for (Cliente user : Banco.clientes) {
								cuenta = user.login(usuario, contraseña);
								if (cuenta != null) { ingresado = true; break flag;};
							}
							for (Gestor user : Banco.gestores) {
								cuentaGestor = user.login(usuario, contraseña);
								if (cuentaGestor != null) { ingresado = true; esGestor = true; break flag;};
							}
							System.out.println("Usuario o contraseña incorrecto");
							break;
					case 2:
							registrar(sc,false);
				}
			}
			

			inicio:
			while(true) {
				if (esGestor) {
				System.out.println("Elige una opcion ingresando un numero:\n"
						+ "1 --> Gestores\n"
						+ "2 --> Clientes\n"
						+ "3 --> Transacciones\n"
						+ "4 --> Mensajes\n"
						+ "0 --> Salir\n");
				respuesta = respuestaCorrecta(4,sc);
					switch (respuesta) {
						case 0: continue program;
						case 1: System.out.println("Elige una opcion ingresando un numero:\n"
								+ "1 --> Agregar gestor\n"
								+ "2 --> Obtener gestor\n"
								+ "3 --> Obtener gestores\n"
								+ "4 --> Actualizar gestor\n"
								+ "5 --> Agregar gestores\n"
								+ "0 --> Volver\n");
								respuesta = respuestaCorrecta(6,sc);
									switch(respuesta) {
									case 0: continue inicio;
									case 1:	registrar(sc,true); cuentaGestor.aumento(100); break;
									case 2: 
										System.out.println("Ingrese un ID");
										id = sc.nextInt();
										Gestor gestor = Banco.gestores.get(id);
										System.out.println("ID: " + Banco.gestores.indexOf(Banco.gestores.get(id)) + ", NOMBRE: " + gestor.getNombre() + ", SALARIO: " + gestor.getSalario() + ", USUARIO: " + gestor.getUsuario() + ", REGISTRADO: " + gestor.getCuenta()); break;
									case 3: 
										for (Gestor personaLoop : Banco.gestores) {
											if(Banco.gestores.indexOf(personaLoop)>0) {
												System.out.println("ID: " + Banco.gestores.indexOf(personaLoop) + ", NOMBRE: " + personaLoop.getNombre() + ", SALARIO: " + personaLoop.getSalario() + ", USUARIO: " + personaLoop.getUsuario() + ", REGISTRADO: " + personaLoop.getCuenta() + "\n");
											};
										} break;
									case 4: 
										System.out.println("Ingrese un ID");
										id = sc.nextInt();
										System.out.println("Elige una opcion ingresando un numero:\n "
												+ "1 --> Actualizar nombre\n"
												+ "2 --> Actualizar usuario\n"
												+ "3 --> Actualizar contraseña\n"
												+ "4 --> Actualizar salario\n"
												+ "5 --> Eliminar gestor\n"
												+ "0 --> Volver\n");
												respuesta = respuestaCorrecta(6,sc);
												switch(respuesta) {
													case 0: continue inicio;
													case 1:Banco.gestores.get(id).setNombre(sc); break;
													case 2:Banco.gestores.get(id).setUsuario(sc); break;
													case 3:Banco.gestores.get(id).setContraseña(sc); break;
													case 4:Banco.gestores.get(id).setSalario(sc); break;
													case 5:Banco.gestores.remove(id);
												}; break;
									case 5: 
										System.out.println("Cantidad de gestores a producir de forma masiva: ");
										int cantidadDeGestores = sc.nextInt();
										agregarGestores(sc, cantidadDeGestores);		
									}
								
								break;
						case 2: System.out.println("Elige una opcion ingresando un numero:\n"
								+ "1 --> Agregar cliente\n"
								+ "2 --> Obtener cliente\n"
								+ "3 --> Obtener clientes\n"
								+ "4 --> Actualizar cliente\n"
								+ "0 --> Volver\n");
								respuesta = respuestaCorrecta(5,sc);
								switch(respuesta) {
								case 0: continue inicio;
								case 1:	registrar(sc,false); cuentaGestor.aumento(200);break;
								case 2: 
									System.out.println("Ingrese un ID");
									id = sc.nextInt();
									Cliente cliente = Banco.clientes.get(id);
									System.out.println("ID: " + Banco.clientes.indexOf(Banco.clientes.get(id)) + ", NOMBRE: " + cliente.getNombre() + ", BALANCE: " + cliente.getBalance() + ", USUARIO: " + cliente.getUsuario() + ", REGISTRADO: " + cliente.getCuenta()); 
									break;
								case 3: 
									for (Cliente personaLoop : Banco.clientes) {
										System.out.println("ID: " + Banco.clientes.indexOf(personaLoop) + ", NOMBRE: " + personaLoop.getNombre() + ", BALANCE: " + personaLoop.getBalance() + ", USUARIO: " + personaLoop.getUsuario() + ", REGISTRADO: " + personaLoop.getCuenta() + "\n");
									}; break;
								case 4: 
									System.out.println("Ingrese un ID");
									id = sc.nextInt();
									System.out.println("Elige una opcion ingresando un numero:\n "
											+ "1 --> Actualizar nombre\n"
											+ "2 --> Actualizar usuario\n"
											+ "3 --> Actualizar contraseña\n"
											+ "4 --> Actualizar balance\n"
											+ "5 --> Eliminar cliente\n"
											+ "0 --> Volver\n");
											respuesta = respuestaCorrecta(6,sc);
											switch(respuesta) {
												case 0: continue inicio;
												case 1:Banco.clientes.get(id).setNombre(sc);
												case 2:Banco.clientes.get(id).setUsuario(sc);
												case 3:Banco.clientes.get(id).setContraseña(sc);
												case 4:Banco.clientes.get(id).setBalance(sc);
												case 5:Banco.clientes.remove(id);
											};
								};
								
								
								
								break;
						case 3: System.out.println("Elige una opcion ingresando un numero:\n "
								+ "1 --> Obtener transaccion\n"
								+ "2 --> Obtener transacciones\n"
								+ "0 --> Volver\n");
								respuesta = respuestaCorrecta(3,sc);
								switch(respuesta) {
									case 0: continue inicio;
									case 1: 
										System.out.println("Ingrese el ID de la transaccion");
										respuesta = sc.nextInt();
										Banco.transferencias.get(id).getInfo(); break;
									case 2:
										for (Transferencia transferencia : Banco.transferencias) {
											transferencia.getInfo();
										}
								} break;
						case 4: System.out.println("Elige una opcion ingresando un numero:\n "
								+ "1 --> Enviar mensaje\n"
								+ "2 --> Ver mensaje\n"
								+ "3 --> Ver todos los mensajes\n"
								+ "4 --> Ver mis mensajes\n"
								+ "0 --> Volver\n");
								respuesta = respuestaCorrecta(4,sc);
								switch(respuesta) {
								case 0: continue inicio;
								case 1: new Mensaje(sc, cuentaGestor); break;
								case 2: 
									System.out.println("Ingrese el ID del mensaje");
									id = sc.nextInt();
									Banco.mensajes.get(id).getInfo(); break;
								case 3:
									for(Mensaje mensaje : Banco.mensajes) {
										mensaje.getInfo();
									}; break;
								case 4:
									cuentaGestor.verMensajes();
								};								
					};	
				};
				if (!esGestor) {
					System.out.println("Elige una opcion ingresando un numero:\n"
							+ "1 --> Balance\n"
							+ "2 --> Operacion\n"
							+ "3 --> Ver mis operaciones \n"
							+ "4 --> Enviar mensaje\n"
							+ "5 --> Mis mensajes\n"
							+ "6 --> Cuenta\n"
							+ "0 --> Salir\n");
					respuesta = respuestaCorrecta(6,sc);
					
					switch(respuesta) {
						case 0: continue program;
						case 1: System.out.println("BALANCE: " + cuenta.getBalance()); break;
						case 2: System.out.println("Elige una opcion ingresando un numero:\n"
								+ "1 --> Deposito/Extraccion\n"
								+ "2 --> Transferencia\n"
								+ "0 --> Volver");
								respuesta = respuestaCorrecta(2,sc);
								switch(respuesta) {
									case 0: continue inicio;
									case 1: new Transferencia(sc, cuenta); break;
									case 2: 
										System.out.println("¿Para quien es?");
										nombre = sc.next();
										for(Cliente cliente : Banco.clientes) {
											if (cliente.getNombre().equals(nombre)) {
												persona = cliente;
												break;
											}
										}
										new Transferencia(sc, cuenta, persona); break;
								} break;
					case 3: for (Transferencia operacion : Banco.transferencias) {
							if (operacion.getParteA() == cuenta || operacion.getParteB() == cuenta) {
								operacion.getInfo();
							}
						}; break;
						case 4: new Mensaje(sc, cuenta); break;
						case 5: cuenta.verMensajes(); break;
						case 6: System.out.println("Elige una opcion ingresando un numero:\n"
								+ "1 --> Cambiar usuario\n"
								+ "2 --> Cambiar contraseña\n"
								+ "3 --> Eliminar cuenta\n"
								+ "0 --> Volver\n"); 
								respuesta = respuestaCorrecta(3,sc);
								switch (respuesta) {
									case 0: continue inicio;
									case 1: cuenta.setUsuario(sc); break;
									case 2: cuenta.setContraseña(sc);break;
									case 3: Banco.clientes.remove(Banco.clientes.indexOf(cuenta)); continue program;
								};
					};
				};
			}
		};
		sc.close();
	};
	
	public static int respuestaCorrecta(int max, Scanner sc){
		boolean valido = false;
		int ans = -1;
		while(!valido) {
			try {
				ans = sc.nextInt();
				if (ans <= max && ans > -1) {
					System.out.println("Opcion " + ans + " ingresada correctamente\n");
					valido = true;
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
		return ans;
	};
	
	public static void salir() {
		
	}
	
	public static void ingresar(){}
	
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
		}
		for (Gestor user : Banco.gestores) {
			if (user.getUsuario().equals(usuario)) {
				System.out.println("Usuario ya registrado");
				return false;
			}
		};
		if (gestor) {
			new Gestor(nombre,usuario,contraseña);
		} else {
			new Cliente(nombre,usuario,contraseña);
		};
		return true;
	}
	public static void  agregarGestores(Scanner sc, int cantidad) {
		Random rand = new Random();
		int salario;
		String nombre;
		String usuario;
		String contraseña; 
		for (int i=0; i<cantidad; i++ ) {
			salario = rand.nextInt(5000);
			nombre = "GestorAleatorio" + rand.nextInt(10000);
			usuario = rand.nextInt(10000) + "GestorAleatorio";
			contraseña = rand.nextInt(50000) + "¿?¿??TokenDeSeguridadInquebrantable!=·%/()·" + rand.nextInt(50000);
			new Gestor(nombre, usuario, contraseña, salario);
		};
	};
}
