package snake;
import java.awt.*;
import javax.swing.*;
import java.util.Timer;
import java.util.TimerTask;

//t = t;

public class Juego extends JComponent {
	
	private int escenaXOff = 30;
	private int escenaYOff = 30;
	private int casilleros = 25;
	private int casilleroDim = 20;
	
	public int getEscenaXOff() {
		return this.escenaXOff;
	}
	public int getEscenaYOff() {
		return this.escenaYOff;
	}
	
	protected void paintComponent(Graphics g) {
		g.drawString("¡Bienvenido! Pulsa Enter para empezar,"
					 +" WDSA para cambiar dirección y ESC para salir", 30, 20);
		new Escena(casilleros,casilleroDim,escenaXOff,escenaYOff).dibujarEscena(g);
		
		Snake.snake.add(new Pieza());
		new Timer().schedule(tic,0,700);
		}
	
	int i = 1;
	long delay = 1000L;
	
	TimerTask tic = new TimerTask() {
		
		public void run () {
			System.out.println(i);
			i += 1;
			Snake.move();
		}

	};
	
}
	
	
	

