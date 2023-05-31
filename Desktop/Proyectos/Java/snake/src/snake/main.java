package snake;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Scanner;


public class main{

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
		f.setFocusable(true);
		f.addKeyListener(new KeyListener() {
			@Override
			public void keyReleased(KeyEvent e) {}
			@Override
			public void keyTyped(KeyEvent e) {}

			@Override
			public void keyPressed(KeyEvent e) {
				int tecla = e.getKeyCode();
				switch(tecla) {
					case KeyEvent.VK_W:
						j.w();
						break;
					case KeyEvent.VK_A:
						j.a();
						break;
					case KeyEvent.VK_S:
						j.s();
						break;
					case KeyEvent.VK_D:
						j.d();
						break;
					case KeyEvent.VK_ENTER:
						j.enter();
						break;
					case KeyEvent.VK_P:
						j.pause();
						break;
				}
				
			}
		});	
	}	
	
}
	
