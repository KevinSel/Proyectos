package com.ejemplo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ClassPathXmlApplicationContext context =
				new ClassPathXmlApplicationContext("applicationContext.xml");
		
		Entrenador entrenador = context.getBean("mientrenadorfb", Entrenador.class);
		
		Entrenador entrenador2 = context.getBean("mientrenador", Entrenador.class);
		
	

		System.out.println(entrenador.getExperiencia());
		System.out.println(entrenador.getEquipo());
		System.out.println(entrenador.getEmail());
		System.out.println(entrenador.getEntrenamiento());
		
		
		System.out.println(entrenador2.getExperiencia());
	//	System.out.println(entrenador2.getEntrenamiento());
		
		context.close();
		
	}
}
