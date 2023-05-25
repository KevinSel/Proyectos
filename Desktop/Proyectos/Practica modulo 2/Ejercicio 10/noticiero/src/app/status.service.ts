import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  enHome = true;
  enNoticia = false;
  enSeccion = false;
  titulo = "Algun titulo"
  seccion = "Alguna seccion"
  constructor() { }
  setStatus(home: boolean, noticia: boolean, seccion: boolean ):void {
    this.enHome = home;
    this.enNoticia = noticia;
    this.enSeccion = seccion;
  }
  getData(){
    return {enHome:this.enHome, enNoticia:this.enNoticia, enSeccion:this.enSeccion, titulo:this.titulo, seccion:this.seccion,}
  }

}
