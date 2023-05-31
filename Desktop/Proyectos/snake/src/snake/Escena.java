package snake;
import java.awt.*;
import javax.swing.*;

public class Escena {

	private int xOff;
	private int yOff;
	private int casilleros;
	private int casilleroDim;
	
	public void dibujarEscena(Graphics g) {
		g.setColor(Color.BLUE);
		for(int i=0; i<casilleros; i++) {
			for(int j=0; j<casilleros; j++) {
				g.drawPolygon(new int[]{xOff+i*casilleroDim,
										xOff+(i+1)*casilleroDim,
										xOff+(i+1)*casilleroDim,
										xOff+(i)*casilleroDim},
							  new int[]{yOff+(j)*casilleroDim,
									  	yOff+(j)*casilleroDim,
									  	yOff+(j+1)*casilleroDim,
									  	yOff+(j+1)*casilleroDim},
							  4);
			}
		}
		g.setColor(Color.BLACK);
		//Borde
		g.drawPolygon(new int[] {xOff,casilleros*casilleroDim+xOff,casilleros*casilleroDim+xOff, xOff},
					  new int[] {yOff,yOff,casilleros*casilleroDim+yOff,casilleros*casilleroDim+yOff}, 4);
	}
	
	public Escena(int casilleros, int casilleroDim, int xOff, int yOff) {
		this.xOff = xOff;
		this.yOff = yOff;
		this.casilleros = casilleros;
		this.casilleroDim = casilleroDim;
	}
}
