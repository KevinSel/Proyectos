import { Injectable } from '@angular/core';
import { noticias, Noticia } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  id = -1;
  noticias:Noticia[] = noticias;

  //subheader
  titulo: string = "";
  seccion: string = "";
  enHome = true;
  enNoticia = false;
  enSeccion = false;
 
  setStatus(home: boolean, noticia: boolean, seccion: boolean ):void {
    this.enHome = home;
    this.enNoticia = noticia;
    this.enSeccion = seccion;
  }
  //

  //noticia
  getNoticiaFromTitle(){
    let noticia = noticias.filter(noticia => noticia.titulo == this.titulo)
    if (noticia[0] == undefined) {
      this.titulo = "Esta noticia no existe";
      return noticias[0];
    };
    return noticias.filter(noticia => noticia.titulo == this.titulo)[0];
  };
  //

  //filtros
  filtrado = false;
  noticiasFiltradas:Noticia[] = noticias.slice(1); // Estado basico
  filtroSeccion:any = {
    opinion  : false,
    politica : false,
    deporte  : false,
    ciencia  : false,
    economia : false,
  };
  filtroAutor:any = {
    jonathanGranado : false,
    noemiSegarra    : false,
    joneFigueras    : false,
    mirianFuertes   : false,
  };
  
  secciones: Array<string> = [];
  autores: Array<string> = [];
  fecha:string = "";

  filtrar(){
    this.filtrado = true;

    Object.keys(this.filtroSeccion).map(seccion => {if (this.filtroSeccion[seccion]){this.secciones.push(seccion)}}) //Actualizar array de secciones

    Object.keys(this.filtroAutor).map(autor => {if (this.filtroAutor[autor]){this.autores.push(autor)}}) // Actualizar array de autores

    this.secciones.map( seccion => {this.noticiasFiltradas = this.noticiasFiltradas.filter(noticia => noticia.seccion == seccion)})

    if (this.autores.length > 0){
      let autoresFormateado = this.autores.map(autor => {let aux = [autor.slice(0,1).toUpperCase() , autor.slice(1)].join("");// to camelCase
                                                         return aux.match(/([A-Z][a-z]+)/g)!.join(" ")}); // to PascalCase
      autoresFormateado.map( autor => {this.noticiasFiltradas = this.noticiasFiltradas.filter(noticia => noticia.autor == autor!)})
    ;}

    if (this.fecha != "") {
      let aux = this.fecha.match(/(\d+)/g);
      this.fecha = [aux![2],aux![1],aux![0]].join("/"); //Pasar fecha a dd/mm/aaaa

      this.noticiasFiltradas = this.noticiasFiltradas.filter( noticia => noticia.fecha == this.fecha);

    };

  };
 
  //Clear
  clearFilter(){
    this.noticiasFiltradas = noticias.slice(1);
    this.secciones = [];
    this.autores = [];
    this.fecha = "";
    if(this.enSeccion){
      this.secciones.push(this.seccion);
      this.filtrar();
    };
    this.filtrado = false;
  };





  constructor() { };

};


