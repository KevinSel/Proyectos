import { Injectable } from '@angular/core';
import { noticias, Noticia } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  id = -1;
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

}
