package com.spring.practica4;
import java.util.Scanner;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Random;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int respuesta;
		int id;
		Persona usuarioLogeado;
		Scanner sc = new Scanner(System.in);
		
		//Usuario: lucas
		//Contraseña: lucas123
		
		program:
		while(true) {

			usuarioLogeado = null;
			
			login:
			while(true) {
				respuesta = menuNumeros(sc, new String[] {"Cerrar programa", "Iniciar sesion","Registrarse"});		
				switch (respuesta) {
				case 0: break program;
				case 1: usuarioLogeado = PersonaDB.logIn(sc);
					if (usuarioLogeado != null) {break login;};
				break;
				case 2:
					PersonaDB.dbRegistrar(sc, false);
				};
			};
			
			inicio:
			while(true) {
				if (usuarioLogeado.esGestor) {
					((Gestor) usuarioLogeado).cambiarSalario((double) 10.5);
					respuesta = menuNumeros(sc, new String[] {"Salir","Gestores","Clientes","Operaciones","Mensajes","Mi cuenta"});	
					switch (respuesta) {
					case 0: continue program;
					case 1: respuesta = menuNumeros(sc, new String[] {"Volver","Agregar gestor","Obtener gestor","Obtener gestores","Actualizar gestor","Agregar gestores", "Ver clientes de gestor"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1:	PersonaDB.dbRegistrar(sc, true); break;
						case 2: obtenerPersonaPorId(sc, "gestor");
						break;
						case 3: 
							PersonaDB.dbGetTodos("gestor");
						break;
						case 4: 
							respuesta = menuNumeros(sc, new String[] {"Volver","Actualizar nombre","Actualizar apellido","Actualizar usuario","Actualizar contraseña" ,"Actualizar salario","Eliminar gestor"});
							id = obtenerIdPorConsola(sc);
							switch(respuesta) {
							case 0: continue inicio;
							case 1:PersonaDB.dbSetNombre(sc,"gestor", id); break;
							case 2:PersonaDB.dbSetApellido(sc, "gestor", id); break;
							case 3:PersonaDB.dbSetUsuario(sc, "gestor", id); break;
							case 4:PersonaDB.dbSetContaseña(sc, "gestor", id); break;
							case 5:GestorDB.dbSetSalario(sc,id); break;
							case 6:PersonaDB.dBBorrar(id, "gestor");;
							};
						break;
						case 5: 
							System.out.println("Cantidad de gestores a producir de forma masiva: ");
							respuesta = obtenerIntPorConsola(sc);
							PersonaDB.dbRegistrarEnMasa(respuesta); break;
						case 6:
							id = obtenerIdPorConsola(sc);
							GestorDB.dbVerClientesDeGestor(id);
						};
					break;	
					case 2: 
						respuesta = menuNumeros(sc,new String[] {"Volver","Agregar cliente","Obtener cliente","Obtener clientes","Actualizar cliente","Ver mis clientes"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1:	PersonaDB.dbRegistrar(sc, usuarioLogeado.getId()); ((Gestor) usuarioLogeado).cambiarSalario((double) 25.2); break;
						case 2: obtenerPersonaPorId(sc, "cliente");
						break;
						case 3: 
							PersonaDB.dbGetTodos("cliente");
						break;
						case 4: 
							respuesta = menuNumeros(sc,new String[] {"Volver","Actualizar nombre","Actualizar usuario","Actualizar contraseña","Actualizar balance","Eliminar cliente"});
							id = obtenerIdPorConsola(sc);
							switch(respuesta) {
							case 0: continue inicio;
							case 1:PersonaDB.dbSetNombre(sc,"cliente", id); break;
							case 2:PersonaDB.dbSetUsuario(sc,"cliente", id); break;
							case 3:PersonaDB.dbSetContaseña(sc,"cliente", id); break;
							case 4:ClienteDB.dbSetBalance(sc, id); break;
							case 5:PersonaDB.dBBorrar(id, "cliente"); ((Gestor) usuarioLogeado).cambiarSalario((double) -50.1); break;
							}; break;
						case 5: ((Gestor) usuarioLogeado).verMisClientes();
						};
					break;		
					case 3:
						respuesta = menuNumeros(sc,new String[] {"Volver", "Obtener deposito/extraccion por ID", "Obtener transferencia por ID" ,"Obtener todas las operaciones", "Obtener todas las operaciones de un usuario"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1: OperacionesDB.dBVerDepositoPorID(sc); break;
						case 2: OperacionesDB.dBVerTransferenciaPorId(sc); break;
						case 3: OperacionesDB.dbVerTodasOperaciones(); break;
						case 4:
							id = obtenerIdPorConsola(sc);
							OperacionesDB.dbVerOperacionesCliente(id);
						}break;
					case 4: 
						respuesta = menuNumeros(sc, new String[] {"Volver","Enviar mensaje","Ver mensaje","Ver todos los mensajes","Ver mis mensajes"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1: MensajeDB.dbNuevoMensaje(sc, usuarioLogeado.getUsuario()); break;
						case 2: 
							id = obtenerIdPorConsola(sc);
							MensajeDB.dbGetUnMensaje(id); break;
						case 3:MensajeDB.dbGetMensajes();break;
						case 4:
							MensajeDB.dbGetMisMensaje(usuarioLogeado.getUsuario());
						}; break;
					case 5:
						respuesta = menuNumeros(sc, new String[] {"Volver","Cambiar nombre","Cambiar apellido","Cambiar usuario","Cambiar contraseña", "Ver informacion","Eliminar cuenta"});
						switch (respuesta) {
							case 0: continue inicio;
							case 1: usuarioLogeado.setNombre(sc); break;
							case 2: usuarioLogeado.setApellido(sc);break;
							case 3: usuarioLogeado.setUsuario(sc);break;
							case 4: usuarioLogeado.setContraseña(sc);break;
							case 5: usuarioLogeado.getInfo(); break;
							case 6: PersonaDB.dBBorrar(usuarioLogeado.getId(), "cliente"); continue program;
						};	
					};
				};
				
		
				if (!usuarioLogeado.esGestor()) {
					respuesta = menuNumeros(sc, new String[] {"Salir","Balance","Operacion","Ver mis operaciones","Enviar mensaje","Mis mensajes","Mi cuenta"});
					switch(respuesta) {
					case 0: continue program;
					case 1: System.out.println("BALANCE: " + ((Cliente) usuarioLogeado).getBalance()); break;
					case 2:
						respuesta = menuNumeros(sc, new String[] {"Volver", "Deposito o extraccion", "Transferencia"});
						switch(respuesta) {
						case 0: continue inicio;
						case 1: ((Cliente)usuarioLogeado).nuevoDeposito(sc); break;
						case 2: ((Cliente)usuarioLogeado).nuevaTransferencia(sc); break;
						};
					break;
					case 3:OperacionesDB.dbVerOperacionesCliente(usuarioLogeado.getId());break;
					case 4:MensajeDB.dbNuevoMensaje(sc, usuarioLogeado.getUsuario()); break;

					case 6: 
						respuesta = menuNumeros(sc, new String[] {"Volver","Cambiar nombre","Cambiar apellido","Cambiar usuario","Cambiar contraseña", "Ver informacion","Eliminar cuenta"});
						switch (respuesta) {
							case 0: continue inicio;
							case 1: usuarioLogeado.setNombre(sc); break;
							case 2: usuarioLogeado.setApellido(sc);break;
							case 3: usuarioLogeado.setUsuario(sc);break;
							case 4: usuarioLogeado.setContraseña(sc);break;
							case 5: usuarioLogeado.getInfo(); break;
							case 6: PersonaDB.dBBorrar(usuarioLogeado.getId(), "cliente"); continue program;
						};
					};
				};
			}
		
		}
		sc.close();
	};
	
	public static int menuNumeros(Scanner sc, String[] opciones) {
		String menu = "\nElige una opcion ingresando un numero\n";
		for(int i = 1; i<opciones.length; i++) {
			menu += i + " --> " + opciones[i] + "\n";
		}
		menu += "0 --> " + opciones[0];
		System.out.println(menu);
		return obtenerIntPorConsolaConMaximo(sc,opciones.length - 1);
	};
	
	public static int obtenerIntPorConsolaConMaximo(Scanner sc, int max){
		
		boolean numeroValido = false;
		int respuesta = -1;
		
		while(!numeroValido) {
			respuesta = obtenerIntPorConsola(sc);
			if (respuesta <= max && respuesta > -1) {
				numeroValido = true;
			} else {
				System.out.println("La opcion ingresada es incorecta\n"
						+ "Ingresar numero: \n");
			};
		};
		
		return respuesta;
	};

	public static int obtenerIntPorConsola(Scanner sc) {
		int cantidad = 0;
		try {
			cantidad = sc.nextInt();
		}catch(InputMismatchException e) {
			System.out.println("Ingresa un numero valido");
			sc.nextLine();
			return -1;
		};
		return cantidad;
	}
		
	public static double obtenerDoublePorConsola(Scanner sc) {
		Double cantidad = 0.;
		try {
			cantidad = sc.nextDouble();
		}catch(InputMismatchException e) {
			System.out.println("Ingresa un numero valido");
			sc.nextLine();
			return 0.;
		}
		return cantidad;
	};
		
	public static int obtenerIdPorConsola(Scanner sc) {
		System.out.println("Ingrese un ID");
		return obtenerIntPorConsola(sc);
	};
				
	public static void obtenerPersonaPorId(Scanner sc, String tipoCuenta) {
		int id = obtenerIdPorConsola(sc);
		PersonaDB.dbGetPersonaPorId(id, tipoCuenta);
	};
			
	public static String SHA3(String str) {
		try {
		final MessageDigest digest = MessageDigest.getInstance("SHA3-256");
		final byte[] hashbytes = digest.digest(str.getBytes(StandardCharsets.UTF_8));
		return bytesToHex(hashbytes);
		} catch (Exception e) {
		e.printStackTrace();
		return null;
		}
	}
	
	private static String bytesToHex(byte[] hash) {
		StringBuffer hexString = new StringBuffer();
		for (int i = 0; i < hash.length; i++) {
		String hex = Integer.toHexString(0xff & hash[i]);
		if (hex.length() == 1)
		hexString.append('0');
		hexString.append(hex);
		}
		return hexString.toString();
		}
	
}
	

	