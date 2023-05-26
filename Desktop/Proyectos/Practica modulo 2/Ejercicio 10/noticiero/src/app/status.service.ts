import { Injectable } from '@angular/core';
import { noticias, Noticia } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  id = -1;
  titulo: string = "";
  seccion: string = "";
  enHome = true;
  enNoticia = false;
  enSeccion = false;
  noticias:Noticia[] = noticias
  constructor() { }
  setStatus(home: boolean, noticia: boolean, seccion: boolean ):void {
    this.enHome = home;
    this.enNoticia = noticia;
    this.enSeccion = seccion;
  }
  getNoticiaFromTitle(){
    let noticia = noticias.filter(noticia => noticia.titulo == this.titulo)
    if (noticia[0] == undefined) {
      this.titulo = "Esta noticia no existe";
      return noticias[0];
    };
    return noticias.filter(noticia => noticia.titulo == this.titulo)[0];
  };

}


