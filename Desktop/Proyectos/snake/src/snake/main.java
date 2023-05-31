package snake;
import javax.swing.*;
import java.awt.*;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Frame
		int xFrame = 600;
		int yFrame = 600;
		JFrame f = new JFrame();
		Juego j = new Juego();
		f.setSize(xFrame,yFrame);
		f.setTitle("Snake");
		f.add(j);
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		f.setVisible(true);

	}	

}
