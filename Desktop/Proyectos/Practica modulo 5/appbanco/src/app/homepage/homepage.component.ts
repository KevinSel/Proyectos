import { Component } from '@angular/core';
import { StatusService } from '../status.service';
import { Router } from '@angular/router';
import { HttpConexionService } from '../http-conexion.service';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cerrarSesion(){
    this.httpCs.serverGetRequest("login/logoff").subscribe(() => {this.router.navigate(["login"])});
    this.status.persona = null;
  }

  esGestor(){
   return this.status.persona!.esGestor
  }

  reset(entrarAMenu: String, salirDeMenu: String){
    this.informacion.reset();
    this.menues[entrarAMenu as keyof typeof this.menues] = true;
    this.menues[salirDeMenu as keyof typeof this.menues] = false;
    let keys = Object.keys(this.estado) as Array<keyof typeof this.estado>;;
    keys.map((key)=>{this.estado[key] = false})

    
  }

  seleccionar(opcion: String){
    this.informacion.reset();
    this.estado[this.estadoActivo as keyof typeof this.estado] = false;
    this.estado[opcion as keyof typeof this.estado] = true;
    this.estadoActivo = opcion;
  }

  menues = {
    gestor : true,
    gestor1_1 : false,
    gestor1_2 : false,
    gestor1_3 : false,
    gestor1_4 : false,
    gestor1_5 : false,
    cliente : true,
    cliente1_1 : false,
  }


  estadoActivo: String = "";
  estado= {
    agregarGestor: false,
    obtenerGestores: false,
    actualizarGestor: false,
    agregarGestores: false,
    verClientesDeGestor: false,
    agregarCliente: false,
    verClientes: false,
    actualizarCliente: false,
    misClientes: false,
    verTodasLasOperaciones: false,
    verLasOperacionesDeUnUsuario: false,
    verTransferencias: false,
    verDepositos: false,
    enviarMensaje: false,
    verMensaje: false,
    verMisMensajes: false,
    cambiarNombre: false,
    cambiarApellido: false,
    cambiarUsuario: false,
    cambiarPassword: false,
    verInformacion: false,
    miCuenta: false,
    verMisTransferencias: false,
    verMisDepositos:false, 
    transferencia: false,
    deposito: false,
  }


  constructor(private router:Router, private status:StatusService, private httpCs:HttpConexionService, private informacion:InformacionService){
  }


}
