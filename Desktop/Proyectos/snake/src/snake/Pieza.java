package snake;

public class Pieza {
	
	private int[] coordenada = new int[2];
	private int[] direccion = new int[2];
	private int[] posicion = new int[] {this.coordenada[0],this.coordenada[1]};
	
	public int[] getCoordenadas() {
		return this.coordenada;
	}
	
	public int[] getDireccion() {
		return this.direccion;
	}
	
	public int getX() {
		return this.posicion[0]; 
		}
	
	public int getY() {
		return this.posicion[1]; 
		}
	
	public void move() {
		this.coordenada[0] = this.coordenada[0] + this.direccion[0];
		this.coordenada[1] = this.coordenada[1] + this.direccion[1];
	}
	public Pieza() {
		this.coordenada[0] = 0;
		this.coordenada[1] = 0;
		this.direccion[0] = 1;
		this.direccion[1] = 0;
	}
	public Pieza(int x, int y, int dirX, int dirY) {
		this.coordenada[0] = x;
		this.coordenada[1] = y;
		this.direccion[0] = dirX;
		this.direccion[1] = dirY;
	}
}
