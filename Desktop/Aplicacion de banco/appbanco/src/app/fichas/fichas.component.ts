import { Component, Input } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { HttpConexionService } from '../http-conexion.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})

export class FichasComponent {

  password = "";

 @Input() formData = {
    id_gestorForm: 0,
    nombreForm: "",
    apellidoForm: "",
    usuarioForm: "",
  }


  @Input() estado = {actualizarCliente: false,
                    actualizarGestor: false,
                    actualizarClienteLogeado: false,
                    actualizarGestorLogeado: false};

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
  this.info.clienteAActualizar[0].id_gestor = this.formData.id_gestorForm
  this.info.clienteAActualizar[0].nombre = this.formData.nombreForm
  this.info.clienteAActualizar[0].apellido = this.formData.apellidoForm
  this.info.clienteAActualizar[0].usuario = this.formData.usuarioForm
  this.httpCs.serverPutRequestActualizarCliente(this.info.clienteAActualizar[0]).subscribe(x => this.info.respuesta = x.respuesta) 
 }

 actualizarGestorDesdeForm(){
  this.info.gestorAActualizar[0].nombre = this.formData.nombreForm
  this.info.gestorAActualizar[0].apellido = this.formData.apellidoForm
  this.info.gestorAActualizar[0].usuario = this.formData.usuarioForm
  this.httpCs.serverPutRequestActualizarGestor(this.info.gestorAActualizar[0]).subscribe( x => this.info.respuesta = x.respuesta)
 }

 actualizarPassword(tipoCuenta: string){
  this.httpCs.serverPutRequestActualizarPassword(tipoCuenta, this.password, this.status.persona!.id as number).subscribe(x => this.info.respuesta = x.respuesta)
 }

 eliminarUsuario(usuario: String){
  this.httpCs.serverPutRequestBorrarUsuario(usuario).subscribe(x => this.info.respuesta = x.respuesta)
 }
  constructor (private info: InformacionService, private httpCs: HttpConexionService, private status: StatusService) {
   
  }

}
