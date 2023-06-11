import { Injectable } from '@angular/core';
import {Cliente, Gestor, Mensaje, Deposito, Transferencia} from './persona';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

clientesAMostrar: Cliente[] = [];
gestoresAMostrar: Gestor[] = [];
mensajesAMostrar: Mensaje[] = [];
depositosAMostrar: Deposito[] = [];
transferenciasAMostrar: Transferencia[] = [];
clienteAActualizar: Cliente[] = []
gestorAActualizar: Gestor[] = []

reset(){

  this.clientesAMostrar = [];
  this.gestoresAMostrar = [];
  this.mensajesAMostrar = [];
  this.depositosAMostrar = [];
  this.transferenciasAMostrar = [];
  this.gestorAActualizar = [];
  this.clienteAActualizar = [];

}
  constructor() { }

}
