package snake;
import java.awt.*;
import javax.swing.*;
import java.util.ArrayList;

public class Snake extends JComponent {
	
	public static ArrayList<Pieza> piezas = new ArrayList<Pieza>();
	static int tick;
	static int longitud;
	private int[] direccion = {1,0};
	
	
	public Snake() {
		this.longitud = 0;
		nuevaPieza(1, 0, longitud);
	}
	
	public void resetTick() {
		tick = longitud;
	}
	
	public void setDireccion(int[] direccion) {
		this.direccion = direccion;
	}
	
	public void nuevaPieza(int x,int y, int pos) {
		piezas.add(new Pieza(x,y, pos));
		longitud ++;
	}
	
	public void crecer() {
		tick --;
		if(tick == 0) {
			nuevaPieza(-50,-50,longitud);
		}
	};
	
	public void move() {
		Pieza pieza = piezas.get(0);
		int[] piezaActualPos = pieza.getCoordenada();
		int[] piezaDelantePos;
		for(int i = 0; i < longitud; i++) {
				if (i == 0) {
					pieza.setCoordenada(new int[] {pieza.getCoordenada()[0] + direccion[0], pieza.getCoordenada()[1] + direccion[1]});
				} else {
					pieza = piezas.get(i);
					piezaDelantePos = piezaActualPos;
					piezaActualPos = piezas.get(i).getCoordenada();
					pieza.setCoordenada(piezaDelantePos);
				}
			}
	};
	

	
	
	

}