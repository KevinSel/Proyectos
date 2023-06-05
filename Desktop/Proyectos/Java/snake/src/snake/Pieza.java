package snake;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.geom.AffineTransform;

public class Pieza {
	
	private int[] coordenada = new int[2];
	private int posicion;
	private int d = Juego.casilleroDim;
	private int[] direccion = {1,0};
	private int queue;
	
	AffineTransform reset;
	
	public int getPosicion() {
		return posicion;
	};
	public int[] getCoordenada(){
		return coordenada;
	};
	public int getQueue() {
		return this.queue;
	};
	public void setCoordenada(int[] coordenada) {
		this.coordenada = coordenada;
	}
	
	public void setDireccion(int[] direccion) {
		this.direccion = direccion;
	}
	
	public void dibujarPieza(Graphics g, Graphics2D g2d) {
	
		int[] topleft = {coordenada[0]*d + Juego.escenaXOff, coordenada[1]*d + Juego.escenaYOff};
		int[] topright = {(coordenada[0]+1)*d + Juego.escenaXOff, coordenada[1]*d + Juego.escenaYOff};
		int[] bottomright = {(coordenada[0]+1)*d + Juego.escenaXOff,(coordenada[1]+1)*d + Juego.escenaYOff};
		int[] bottomleft = {coordenada[0]*d + Juego.escenaXOff,(coordenada[1]+1)*d + Juego.escenaYOff};
		
		if (this.queue <= 0) {
			switch (this.posicion) {
				case -1:
					g.setColor(Color.YELLOW);
					g.fillOval(topleft[0]+d/8, topleft[1]+d/8, d*3/4,d*3/4); break;
				case 0:
					AffineTransform reset = g2d.getTransform();
				 	g2d.rotate(Math.PI*(direccion[0] + 1)/2 + Math.abs(direccion[1])*Math.PI*(direccion[1] + 1)/2, topleft[0]+d/2,topleft[1]+d/2);
					g.setColor(Color.GREEN);
					g.fillPolygon(new int[] {topleft[0],topright[0],bottomright[0],bottomleft[0]},new int[] {topleft[1],topright[1],bottomright[1],bottomleft[1]},4);
					g.setColor(Color.BLACK);
					//Ojo 1
					g.setColor(Color.WHITE);
					g.fillPolygon(new int[] {(int) (topleft[0]+d*1/5),
											 (int) (topleft[0]+d*0.45),
											 (int) (topleft[0]+d*0.45),
											 (int) (topleft[0]+d*1/5)},
								  new int[] {(int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*0.45),
										  	 (int) (topleft[1]+d*0.45)},4);
					//Ojo 2
					g.fillPolygon(new int[] {(int) (topleft[0]+d*1/5),
											 (int) (topleft[0]+d*0.45),
											 (int) (topleft[0]+d*0.45),
											 (int) (topleft[0]+d*1/5)},
								  new int[] {(int) (topleft[1]+d*0.55),
										  	 (int) (topleft[1]+d*0.55),
										  	 (int) (topleft[1]+d*0.8),
										  	 (int) (topleft[1]+d*0.8)},4);
					//Pupila 1
					g.setColor(Color.BLACK);
					g.fillPolygon(new int[] {(int) (topleft[0]+d*1/5),
											 (int) (topleft[0]+d*0.3),
											 (int) (topleft[0]+d*0.3),
											 (int) (topleft[0]+d*1/5)},
								  new int[] {(int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*0.45),
										  	 (int) (topleft[1]+d*0.45)},4);
					//pupila 2
					g.fillPolygon(new int[] {(int) (topleft[0]+d*1/5),
											 (int) (topleft[0]+d*0.3),
											 (int) (topleft[0]+d*0.3),
											 (int) (topleft[0]+d*1/5)},
								  new int[] {(int) (topleft[1]+d*0.55),
										  	 (int) (topleft[1]+d*0.55),
										  	 (int) (topleft[1]+d*0.8),
										  	 (int) (topleft[1]+d*0.8)},4);				
					//Boca
					g.setColor(Color.RED);
					g.fillPolygon(new int[] {(int) (topleft[0]+d*3/5),
											 (int) (topleft[0]+d*4/5),
											 (int) (topleft[0]+d*4/5),
											 (int) (topleft[0]+d*3/5)},
								  new int[] {(int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*1/5),
										  	 (int) (topleft[1]+d*4/5),
										  	 (int) (topleft[1]+d*4/5)},4);
					g2d.setTransform(reset);
					break;
				default: 
					g.setColor(Color.RED);
					g.drawPolygon(new int[] {topleft[0],topright[0],bottomright[0],bottomleft[0]},new int[] {topleft[1],topright[1],bottomright[1],bottomleft[1]},4);
					g.setColor(new Color(255,0,0,15));
					g.fillPolygon(new int[] {topleft[0],topright[0],bottomright[0],bottomleft[0]},new int[] {topleft[1],topright[1],bottomright[1], bottomleft[1]},4);
			};	
		};
				
		if (this.queue>0) {
			this.queue --;
			g.setColor(new Color(255,255,0,100));
			g.fillOval(topleft[0]+d/8, topleft[1]+d/8, d*3/4,d*3/4);
		};
	}
	
	public Pieza(int x, int y, int pos) {
		this.coordenada[0] = x;
		this.coordenada[1] = y;
		this.posicion = pos;
		this.queue = pos;
	}
	
}
