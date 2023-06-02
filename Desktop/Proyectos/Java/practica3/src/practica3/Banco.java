package practica3;
import java.util.ArrayList;

public class Banco {
	
	public static ArrayList<Gestor> gestores = new ArrayList<Gestor>();
	public static ArrayList<Cliente> clientes = new ArrayList<Cliente>();
	public static ArrayList<Transferencia> transferencias = new ArrayList<Transferencia>();
	public static ArrayList<Mensaje> mensajes = new ArrayList<Mensaje>();
	public static int balanceBanco = 1000000;
	protected int id;
	
	protected int getId() {
		return this.id;
	};
	
	protected void getInfo() {};

	protected void remover(ArrayList<? extends Banco> array) {
		array.remove(this);
	}
	
}
