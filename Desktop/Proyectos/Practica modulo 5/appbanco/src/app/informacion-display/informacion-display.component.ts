import { Component, Input} from '@angular/core';
import { InformacionService } from '../informacion.service';
import { HttpConexionService } from '../http-conexion.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-informacion-display',
  templateUrl: './informacion-display.component.html',
  styleUrls: ['./informacion-display.component.css']
})
export class InformacionDisplayComponent {

  @Input() estado: any = {};

  respuestaInicial = "";
  id = 1;
  idUsuarioActivo = 0;
  usuario = "";
  usuarioUsuarioActivo = "";
  balanceInicial = 0;
  monto = 0;
  id_receptor = 0;
  usuarioReceptor = "";
  mensaje = "";

  get balance(){
    return this.balanceInicial;
  }

  get respuesta(){
    return this.respuestaInicial;
  };

  obtenerGestor(id: number){
    this.httpCs.serverGetRequestIDGestor(id).subscribe( x => this.informacion.gestoresAMostrar = x)
  }

  agregarGestores(cantidad: number){
    this.httpCs.serverGetRequestCrearGestores(cantidad).subscribe( x => this.respuestaInicial = x['respuesta']);
  }

  verClientesDeGestor(id: number){
    this.httpCs.serverGetRequestClientesIDGestor(id).subscribe(x => this.informacion.clientesAMostrar = x )
  }

  verCliente(id: number){
    this.httpCs.serverGetRequestIDCliente(id).subscribe( x => this.informacion.clientesAMostrar = x)
  }

  verTodasLasOperaciones(){
    this.verDepositos(0)
    setTimeout(() =>  this.verTransferencias(0), 15)
  }

  verLasOperacionesDeUnUsuario(id: number){
    this.verDepositosUsuario(id)
    setTimeout(() => this.verTransferenciasUsuario(id) , 15)
  }

  verDepositosUsuario(id: number){
    this.httpCs.serverGetRequestDepositosCliente(id).subscribe(x => this.informacion.depositosAMostrar = x)
  }
  
  verTransferenciasUsuario(id: number){
    this.httpCs.serverGetRequestTransferenciasCliente(id).subscribe(x => this.informacion.transferenciasAMostrar = x)
  }

  verDepositos(id: number){
   this.httpCs.serverGetRequestDepositos(id).subscribe( x => this.informacion.depositosAMostrar = x)
  }

  verTransferencias(id: number){
    this.httpCs.serverGetRequestTransferencias(id).subscribe( x => this.informacion.transferenciasAMostrar = x)
  }

  enviarMensaje(){
    this.httpCs.serverPostMensaje(this.mensaje, this.usuarioUsuarioActivo,this.usuarioReceptor).subscribe(x => this.respuestaInicial = x.respuesta)
  }

  realizarDeposito(){
    this.httpCs.serverPostDeposito(this.monto, this.idUsuarioActivo).subscribe( x => this.respuestaInicial = x.respuesta)
    if(-this.monto > this.balanceInicial){this.monto = 0}
    this.status.persona!.balance! += this.monto
    this.balanceInicial += this.monto
  }

  realizarTransferencia(){
    this.httpCs.serverPostTransferencia(this.monto, this.idUsuarioActivo, this.id_receptor).subscribe(x=> this.respuestaInicial = x.respuesta)
    if(this.monto > this.balanceInicial || this.monto < 0){this.monto = 0}
    this.status.persona!.balance! -= this.monto
    this.balanceInicial -= this.monto
  }

  verMensajes(id: number){
    this.httpCs.serverGetRequestIDMensaje(id).subscribe( x => this.informacion.mensajesAMostrar = x)
  }

  verMensajesUsuario(usuario: string){
    this.httpCs.serverGetRequestUSMensaje(usuario).subscribe(x => this.informacion.mensajesAMostrar = x)
  }
  actualizarClienteLogeado(){
    this.actualizarCliente(this.idUsuarioActivo)
  }

  actualizarGestorLogeado(){
    this.actualizarGestor(this.idUsuarioActivo)
  }

  actualizarGestor(id: number){
    this.httpCs.serverGetRequestIDGestor(id).subscribe(
      (x) => {this.informacion.gestorAActualizar = x
      this.formData.nombreForm = this.informacion.gestorAActualizar[0].nombre as string;
      this.formData.apellidoForm = this.informacion.gestorAActualizar[0].apellido as string;
      this.formData.usuarioForm = this.informacion.gestorAActualizar[0].usuario as string;
    })
  }

  actualizarCliente(id: number){
    this.httpCs.serverGetRequestIDCliente(id).subscribe(
      (x) => {this.informacion.clienteAActualizar = x
      this.formData.id_gestorForm = this.informacion.clienteAActualizar[0].id_gestor;
      this.formData.nombreForm = this.informacion.clienteAActualizar[0].nombre as string;
      this.formData.apellidoForm = this.informacion.clienteAActualizar[0].apellido as string;
      this.formData.usuarioForm = this.informacion.clienteAActualizar[0].usuario as string;
    })
  }

  mayorQueCero(){
    if(this.id < 1){
      this.id = 1;
    }
  }

  formData = {
    id_gestorForm: 0,
    nombreForm: "",
    apellidoForm: "",
    usuarioForm: "",
    passwordForm: "",
  }


  ngOnChanges(){
    if(this.estado.misClientes){this.verClientesDeGestor(this.idUsuarioActivo)}
    if(this.estado.verTodasLasOperaciones){this.verTodasLasOperaciones()}
    if(this.estado.verMisMensajes){this.verMensajesUsuario(this.usuarioUsuarioActivo)}
    if(this.estado.verMisDepositos){this.verDepositosUsuario(this.idUsuarioActivo)}
    if(this.estado.verMisTransferencias){this.verTransferenciasUsuario(this.idUsuarioActivo)}
    if(this.estado.actualizarClienteLogeado){
      this.actualizarClienteLogeado()}
    if(this.estado.actualizarGestorLogeado){
      this.actualizarGestorLogeado()}
  }

  
  constructor (private informacion: InformacionService, private httpCs: HttpConexionService, private status: StatusService) {
    if(this.status.persona != null){
      this.idUsuarioActivo = this.status.persona!.id as number;
      this.usuarioUsuarioActivo = this.status.persona!.usuario as string;
      if(!this.status.persona!.esGestor){
        this.balanceInicial = this.status.persona!.balance as number
      }
    }
  }

}
