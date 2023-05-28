import { Component } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
})


export class FilterTabComponent {
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
  jonathanGranado  = false;
  noemiSegarra     = false;
  joneFigueras     = false;
  mirianFuertes    = false;

  keys = Object.keys(this.valuesSeccion);

  updateSeccion(toCheck:string){
    this.keys.map( x => { this.valuesSeccion[x as keyof typeof this.valuesSeccion] = false} );
    this.valuesSeccion[toCheck as keyof typeof this.valuesSeccion] = true;
    this.update();
    console.log(this.status.secciones)
  }

  update(){
    this.status.clearFilter();
    this.status.fecha = this.fecha;
    this.status.filtroSeccion.opinion = this.valuesSeccion.opinion;
    this.status.filtroSeccion.politica = this.valuesSeccion.politica;
    this.status.filtroSeccion.deporte = this.valuesSeccion.deporte;
    this.status.filtroSeccion.ciencia = this.valuesSeccion.ciencia;
    this.status.filtroSeccion.economia = this.valuesSeccion.economia;
    this.status.filtroSeccion.jonathanGranado = this.jonathanGranado;
    this.status.filtroSeccion.noemiSegarra = this.noemiSegarra;
    this.status.filtroSeccion.joneFigueras = this.joneFigueras;
    this.status.filtroSeccion.mirianFuertes = this.mirianFuertes;
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
  this.jonathanGranado = false;
  this.noemiSegarra = false;
  this.joneFigueras = false;
  this.mirianFuertes = false;
 }

 constructor (private status:StatusService){}

}
