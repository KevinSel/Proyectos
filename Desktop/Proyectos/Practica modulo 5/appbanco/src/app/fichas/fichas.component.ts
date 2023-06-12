import { Component, Input } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { HttpConexionService } from '../http-conexion.service';
import { Cliente, Gestor } from '../persona';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})

export class FichasComponent {

  id_gestorForm = 0;
  nombreForm: String = "";
  apellidoForm: String = "";
  usuarioForm: String = "";
  passwordForm = "";

  @Input() estado = {actualizarCliente: false,
                    actualizarGestor: false};

 get clientesAMostrar(){
  return this.info.clientesAMostrar
 }
 get gestoresAMostrar(){
  return this.info.gestoresAMostrar
 }
 get mensajesAMostrar(){
  return this.info.mensajesAMostrar
 }
 get depositosAMostrar(){
  return this.info.depositosAMostrar
 }
 get transferenciasAMostrar(){
  return this.info.transferenciasAMostrar
 }
 get clienteAActualizar(){
  return this.info.clienteAActualizar
 }
 get gestorAActualizar(){
  return this.info.gestorAActualizar
 }
get respuesta(){
  return this.info.respuesta;
}
get nombreC(){
  return this.info.clienteAActualizar[0].nombre
}
get apellidoC(){
  return this.info.clienteAActualizar[0].apellido
}
get usuarioC(){
  return this.info.clienteAActualizar[0].usuario
}
get id_gestorC(){
  return this.info.clienteAActualizar[0].id_gestor
}
get nombreG(){
  return this.info.gestorAActualizar[0].nombre
}
get apellidoG(){
  return this.info.gestorAActualizar[0].apellido
}
get usuarioG(){
  return this.info.gestorAActualizar[0].usuario
}

 actualizarClienteDesdeForm(){
  this.info.clienteAActualizar[0].id_gestor = this.id_gestorForm
  this.info.clienteAActualizar[0].nombre = this.nombreForm
  this.info.clienteAActualizar[0].apellido = this.apellidoForm
  this.info.clienteAActualizar[0].usuario = this.usuarioForm

  this.httpCs.serverPutRequestActualizarCliente(this.info.clienteAActualizar[0]).subscribe(x => this.info.respuesta = x.respuesta) 
 }

 actualizarGestorDesdeForm(){
  this.info.gestorAActualizar[0].nombre = this.nombreForm
  this.info.gestorAActualizar[0].apellido = this.apellidoForm
  this.info.gestorAActualizar[0].usuario = this.usuarioForm
  
  this.httpCs.serverPutRequestActualizarGestor(this.info.gestorAActualizar[0]).subscribe( x => this.info.respuesta = x.respuesta)
 }

  constructor (private info: InformacionService, private httpCs: HttpConexionService) {
   
  }

  actualizar(){
    if(this.estado.actualizarCliente){
      this.id_gestorForm = this.info.clienteAActualizar[0].id_gestor;
      this.nombreForm = this.info.clienteAActualizar[0].nombre;
      this.apellidoForm = this.info.clienteAActualizar[0].apellido;
      this.usuarioForm = this.info.clienteAActualizar[0].usuario;
    }
    if(this.estado.actualizarGestor){
      this.nombreForm = this.info.gestorAActualizar[0].nombre;
      this.apellidoForm = this.info.gestorAActualizar[0].apellido;
      this.usuarioForm = this.info.gestorAActualizar[0].usuario;
    }
  }

}
