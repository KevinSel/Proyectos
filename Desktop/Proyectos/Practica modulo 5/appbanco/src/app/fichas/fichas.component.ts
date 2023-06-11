import { Component, Input } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})

export class FichasComponent {

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
  return this.info.clienteAActualizar[0]
 }

 get gestorAActualizar(){
  return this.info.gestorAActualizar[0]
 }

  constructor (private info: InformacionService) {}

}
