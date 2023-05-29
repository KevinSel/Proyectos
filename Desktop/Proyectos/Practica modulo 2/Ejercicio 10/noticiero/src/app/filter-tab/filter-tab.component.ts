import { Component } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
})


export class FilterTabComponent {
  get isLightMode(){
    return this.status.isLightMode;
  }
  changeMode(){
    this.status.isLightMode = !this.status.isLightMode;
  }
  
  todas = "todas"; opinion = "opinion"; politica = "politica"; deporte = "deporte"; economia = "economia"; ciencia = "ciencia"; 
  valuesSeccion = {
    todas :    true,
    opinion  : false,
    politica : false,
    deporte  : false,
    economia : false,
    ciencia  : false,
  };

  fecha = "";

  valuesAutor = {
  jonathanGranado  : true,
  noemiSegarra     : true,
  joneFigueras     : true,
  mirianFuertes    : true,
  }

  keys = Object.keys(this.valuesSeccion);

  updateSeccion(toCheck:string){
    this.keys.map( x => { this.valuesSeccion[x as keyof typeof this.valuesSeccion] = false} );
    this.valuesSeccion[toCheck as keyof typeof this.valuesSeccion] = true;
    this.update();
  }


  update(){
    this.status.clearFilter();
    this.status.fecha = this.fecha;
    this.status.filtroSeccion.opinion = this.valuesSeccion.opinion;
    this.status.filtroSeccion.politica = this.valuesSeccion.politica;
    this.status.filtroSeccion.deporte = this.valuesSeccion.deporte;
    this.status.filtroSeccion.ciencia = this.valuesSeccion.ciencia;
    this.status.filtroSeccion.economia = this.valuesSeccion.economia;
    this.status.filtroAutor.jonathanGranado = this.valuesAutor.jonathanGranado;
    this.status.filtroAutor.noemiSegarra = this.valuesAutor.noemiSegarra;
    this.status.filtroAutor.joneFigueras = this.valuesAutor.joneFigueras;
    this.status.filtroAutor.mirianFuertes = this.valuesAutor.mirianFuertes;
    this.status.filtrar();
  }

  get enSeccion():boolean {
    return this.status.enSeccion;
  }

 limpiar() {
  this.status.clearFilter()
  this.status.filtrado=false;
  this.updateSeccion("todas")
  this.fecha = "";
  this.valuesAutor.jonathanGranado = true;
  this.valuesAutor.noemiSegarra = true;
  this.valuesAutor.joneFigueras = true;
  this.valuesAutor.mirianFuertes = true;
 }

 constructor (private status:StatusService){}

}

