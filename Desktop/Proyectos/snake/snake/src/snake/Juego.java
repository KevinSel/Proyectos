package snake;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
import java.util.Random;

//t = t;

public class Juego extends JComponent {
	
	public static int escenaXOff = 30;
	public static int escenaYOff = 30;
	public static int casilleros = 20;
	public static int casilleroDim = 25;
	public static int tickRate = 200;
	private int puntuacion = 0;
	private boolean playing = true;
	private Timer t;
	private Snake snake = new Snake();
	private Pieza comida = new Pieza(5,5,-1);
	private Random rand = new Random();
	
	protected void paintComponent(Graphics g) {
		
		Graphics2D g2d = (Graphics2D)g;

		g.drawString("¡Bienvenido! Enter: Empezar/Despausar. P: Pausa. AWSD: Movimiento. Puntuacion: " + puntuacion, escenaXOff, escenaYOff/2);
		
		new Escena(casilleros,casilleroDim,escenaXOff,escenaYOff).dibujarEscena(g);
		
		comida.dibujarPieza(g,g2d);
		
		for(Pieza pieza : Snake.piezas) {
			pieza.dibujarPieza(g,g2d);
		}
		
		if (!playing) {
			g.setColor(Color.RED);
			g.setFont(new Font ("Courier New", 1, 17));
			g.drawString("¡Perdiste! Puntuacion: " + puntuacion, escenaXOff+casilleroDim, escenaYOff+casilleroDim/2);
		}

	}
	
	public void w() {
		snake.setDireccion(new int[] {0,-1});
	}
	public void a() {
		snake.setDireccion(new int[] {-1,0});
	}
	public void s() {
		snake.setDireccion(new int[] {0,1});
	}
	public void d() {
		snake.setDireccion(new int[] {1,0});
	}
	public void enter() {
		if (playing) {
		t.start();}
	}
	public void pause() {
		t.stop();
	}

	public void move() {
		this.snake.move();
	}
	
	public void colision() {
		Pieza cabeza = snake.piezas.get(0);
		if (cabeza.getCoordenada()[0] < 0 || cabeza.getCoordenada()[1]<0 || cabeza.getCoordenada()[1]>=casilleros || cabeza.getCoordenada()[0]>=casilleros) {
			this.playing = false;
			repaint();
			t.stop();
			
		}
		if (cabeza.getCoordenada()[0] == comida.getCoordenada()[0] && cabeza.getCoordenada()[1] == comida.getCoordenada()[1]) {
			this.puntuacion += 150;
			snake.resetTick();
			comida.setCoordenada(new int[] {rand.nextInt(casilleros),rand.nextInt(casilleros)});
		}
		for (Pieza pieza : snake.piezas) {
			if (pieza.getPosicion() != 0 && pieza.getCoordenada()[0] == cabeza.getCoordenada()[0] && pieza.getCoordenada()[1] == cabeza.getCoordenada()[1]) {
				t.stop();
				this.playing = false;
			}
		}
	}

	public Juego() {
 		this.t = new Timer(tickRate,new ActionListener() {
  		   public void actionPerformed(ActionEvent evt) {
  			    puntuacion += 1;
  	 			move();
  	 			repaint();
  	 			colision();
  	 			snake.crecer();
  	 		   } 
  	 		} );
		}
	
};


