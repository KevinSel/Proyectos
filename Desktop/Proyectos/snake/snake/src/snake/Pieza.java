package snake;

import java.awt.Color;
import java.awt.Graphics;

public class Pieza {
	
	private int[] coordenada = new int[2];
	private int posicion;
	
	public int getPosicion() {
		return posicion;
	}
	public int[] getCoordenada(){
		return coordenada;
	}
	
	public void setCoordenada(int[] coordenada) {
		this.coordenada = coordenada;
	}
	
	public void dibujarPieza(Graphics g) {
		
		int[] topleft = {coordenada[0]*Juego.casilleroDim + Juego.escenaXOff, coordenada[1]*Juego.casilleroDim + Juego.escenaYOff};
		int[] topright = {(coordenada[0]+1)*Juego.casilleroDim + Juego.escenaXOff, coordenada[1]*Juego.casilleroDim + Juego.escenaYOff};
		int[] bottomright = {(coordenada[0]+1)*Juego.casilleroDim + Juego.escenaXOff,(coordenada[1]+1)*Juego.casilleroDim + Juego.escenaYOff};
		int[] bottomleft = {coordenada[0]*Juego.casilleroDim + Juego.escenaXOff,(coordenada[1]+1)*Juego.casilleroDim + Juego.escenaYOff};
		
		switch (this.posicion) {
			case -1:
				g.setColor(Color.YELLOW);
				g.fillOval(topleft[0], topleft[1], Juego.casilleroDim,Juego.casilleroDim ); break;
			case 0:
				g.setColor(Color.GREEN);
				g.fillPolygon(new int[] {topleft[0],topright[0],bottomright[0],bottomleft[0]},new int[] {topleft[1],topright[1],bottomright[1],bottomleft[1]},4);
				break;
			default: 
				g.setColor(Color.RED);
				g.drawPolygon(new int[] {topleft[0],topright[0],bottomright[0],bottomleft[0]},new int[] {topleft[1],topright[1],bottomright[1],bottomleft[1]},4);
				if(Snake.tick == Snake.longitud - posicion) {
					g.setColor(Color.YELLOW);
					g.fillOval(topleft[0], topleft[1], Juego.casilleroDim,Juego.casilleroDim ); break;
				}
				
		
		}
	}
	
	public Pieza() {
		this.coordenada[0] = 0;
		this.coordenada[1] = 0;
		this.posicion = 0;
	}
	
	public Pieza(int x, int y, int pos) {
		this.coordenada[0] = x;
		this.coordenada[1] = y;
		this.posicion = pos;
	}
	
}
