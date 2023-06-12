import { Component, Input} from '@angular/core';
import { InformacionService } from '../informacion.service';
import { HttpConexionService } from '../http-conexion.service';
import { StatusService } from '../status.service';
import { Deposito, Persona, Transferencia } from '../persona';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-informacion-display',
  templateUrl: './informacion-display.component.html',
  styleUrls: ['./informacion-display.component.css']
})
export class InformacionDisplayComponent {

  @Input() estado: any = {};

  respuestaInicial = "";
  id = 0;
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

  actualizarGestor(id: number){
    this.httpCs.serverGetRequestIDGestor(id).subscribe( x => this.informacion.gestorAActualizar = x)
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

  actualizarCliente(id: number){
    this.httpCs.serverGetRequestIDCliente(id).subscribe( x => this.informacion.clienteAActualizar = x)
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
    if(-this.monto < -this.balanceInicial){this.monto = 0}
    this.status.persona!.balance! += this.monto
    this.balanceInicial += this.monto
  }

  realizarTransferencia(){
    this.httpCs.serverPostTransferencia(this.monto, this.idUsuarioActivo, this.id_receptor).subscribe(x=> this.respuestaInicial = x.respuesta)
    if(-this.monto < -this.balanceInicial || this.monto < 0){this.monto = 0}
    this.status.persona!.balance! -= this.monto
    this.balanceInicial -= this.monto
  }

  verMensajes(id: number){
    this.httpCs.serverGetRequestIDMensaje(id).subscribe( x => this.informacion.mensajesAMostrar = x)
  }

  verMensajesUsuario(usuario: string){
    this.httpCs.serverGetRequestUSMensaje(usuario).subscribe(x => this.informacion.mensajesAMostrar = x)
  }
 
  ngOnChanges(){
    if(this.estado.misClientes){this.verClientesDeGestor(this.idUsuarioActivo)}
    if(this.estado.verTodasLasOperaciones){this.verTodasLasOperaciones()}
    if(this.estado.verMisMensajes){this.verMensajesUsuario(this.usuarioUsuarioActivo)}
    if(this.estado.verMisDepositos){this.verDepositosUsuario(this.idUsuarioActivo)}
    if(this.estado.verMisTransferencias){this.verTransferenciasUsuario(this.idUsuarioActivo)}
  }

  constructor (private informacion: InformacionService, private httpCs: HttpConexionService, private status: StatusService) {
    this.idUsuarioActivo = this.status.persona!.id;
    this.usuarioUsuarioActivo = this.status.persona!.usuario as string;
    if(!this.status.persona!.esGestor){
      this.balanceInicial = this.status.persona!.balance as number
    }
    
  }

}
