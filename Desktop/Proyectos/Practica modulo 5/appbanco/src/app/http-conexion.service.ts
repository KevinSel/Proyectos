import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';
import { Cliente } from './persona';
import { Gestor } from './persona';
import { Mensaje } from './persona';
import { Deposito } from './persona';
import { Transferencia } from './persona';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})


export class HttpConexionService {

  private baseUrl = "http://localhost:8080/";


  constructor(private http: HttpClient){

  }; 

    
  serverPostRequest(urlEnd: String, usuario: String, password: String){
    return this.http.post<Persona>(`${this.baseUrl}${urlEnd}`, {usuario: usuario, password: password});
  }

  serverPostMensaje(mensaje:string, us_emisor: string, us_receptor: string){
    return this.http.post<{respuesta:string}>(`${this.baseUrl}agregarMensaje`, {mensaje: mensaje, us_emisor: us_emisor, us_receptor:us_receptor})
  }

  serverPostDeposito(monto: number, id_emisor: number){
    return this.http.post<{respuesta:string}>(`${this.baseUrl}nuevoDeposito`, {monto:monto, id_emisor:id_emisor})
  }

  serverPostTransferencia(monto: number, id_emisor: number, id_receptor: number){
    return this.http.post<{respuesta:string}>(`${this.baseUrl}nuevaTransferencia`, {monto:monto, id_emisor:id_emisor, id_receptor:id_receptor})
  }

  serverGetRequest(urlEnd: string){
    return this.http.get<Persona|null>(`${this.baseUrl}${urlEnd}`)
  }

  serverGetRequestIDCliente(id: number){
    return this.http.get<Cliente[]>(`${this.baseUrl}cliente`, {params:{id}})
  }
    
  serverGetRequestIDGestor(id: number){
    return this.http.get<Gestor[]>(`${this.baseUrl}gestor`, {params:{id}})
  }

  serverGetRequestClientesIDGestor(id: number){
    return this.http.get<Cliente[]>(`${this.baseUrl}clientesGestor`, {params:{id}})
  }

  serverGetRequestCrearGestores(cantidad: number){
    return this.http.get<{respuesta: string}>(`${this.baseUrl}crearGestores`, {params:{cantidad}})
  }
 
  serverGetRequestIDMensaje(id: number){
    return this.http.get<Mensaje[]>(`${this.baseUrl}mensajes`, {params:{id}})
  }

  serverGetRequestUSMensaje(usuario: string){
    return this.http.get<Mensaje[]>(`${this.baseUrl}mensajesUsuario`, {params:{"usuario":usuario}});
  }

  serverGetRequestDepositos(id: number){
    return this.http.get<Deposito[]>(`${this.baseUrl}deposito`, {params:{id}})
  }

  serverGetRequestTransferencias(id: number){
    return this.http.get<Transferencia[]>(`${this.baseUrl}transferencia`, {params:{id}})
  }

  serverGetRequestDepositosCliente(id: number){
    return this.http.get<Deposito[]>(`${this.baseUrl}depositosCliente`, {params:{id}})
  }

  serverGetRequestTransferenciasCliente(id: number){
    return this.http.get<Transferencia[]>(`${this.baseUrl}transferenciasCliente`, {params:{id}})
  }

}

