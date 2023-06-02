package snake;
import java.awt.*;
import javax.swing.*;
import java.util.ArrayList;

public class Snake extends JComponent {
	
	public static ArrayList<Pieza> piezas = new ArrayList<Pieza>();
	static int longitud;
	private int[] direccion = {1,0};
	
	
	public Snake() {
		Snake.longitud = 1;
		Pieza cabeza = new Pieza(0,0,0);
		Snake.piezas.add(cabeza);
	}
	
	public void setDireccion(int[] direccion) {
		this.direccion = direccion;
	}
	
	public int[] getDireccion() {
		return this.direccion;
	}
	
	public void crecer(int x, int y) {
		Snake.piezas.add(new Pieza(x, y,Snake.longitud));
		longitud ++;
	}
	
	public void move() {
		Pieza pieza = piezas.get(0);
		pieza.setDireccion(direccion);
		int[] piezaActualPos = pieza.getCoordenada();
		int[] piezaDelantePos;
		for(int i = 0; i < longitud; i++) {
				
				if (i == 0) {
					pieza.setCoordenada(new int[] {pieza.getCoordenada()[0] + direccion[0], pieza.getCoordenada()[1] + direccion[1]});
				} else {
					pieza = piezas.get(i);
					if (pieza.getQueue() > 0) {break;}
					piezaDelantePos = piezaActualPos;
					piezaActualPos = piezas.get(i).getCoordenada();
					pieza.setCoordenada(piezaDelantePos);
				}
			}
	};
	

	
	
	

}