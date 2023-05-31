package snake;
import java.awt.*;
import javax.swing.*;
import java.util.ArrayList;

public class Snake extends JComponent {
	
	public static ArrayList<Pieza> snake = new ArrayList<Pieza>();
	
	public static void move() {
		snake.get(0).move();
		int x = Snake.snake.get(0).getX();
		int y = Snake.snake.get(0).getX();
		g.setColor(Color.RED);
		g.fillPolygon(new int[] {x,x+casilleroDim,x+casilleroDim,x},new int[] {y,y,y+casilleroDim,y+casilleroDim}, 4);

	};
	
	public void nuevaPieza(int x,int y,int dirX,int dirY) {
		snake.add(new Pieza(x,y,dirX,dirY));
	}
	
	public void Snake() {
	}
	
}