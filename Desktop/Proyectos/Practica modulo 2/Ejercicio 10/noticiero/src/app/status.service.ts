import { Injectable } from '@angular/core';
import { noticias, Noticia } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  id = -1;
  noticias:Noticia[] = noticias;

  urls = {
    opinion:["../../assets/img/opinionLogoW.svg", "../../../assets/img/opinionLogoB.svg"],
    ciencia:["../../assets/img/cienciaLogoW.svg", "../../assets/img/cienciaLogoB.svg.svg"],
    economia:["../../../assets/img/economiaLogoW.svg", "../../../assets/img/economiaLogoB.svg"],
    politica:["../../../assets/img/politicaLogoW.svg", "../../../assets/img/politicaLogoB.svg"],
    deporte:["../../../assets/img/deporteLogoW.svg", "../../../assets/img/deporteLogoB.svg"],
  }

  //subheader
  titulo: string = "";
  seccion: string = "";
  enHome = true;
  enNoticia = false;
  enSeccion = false;
  isLightMode = false;

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
    jonathanGranado : true,
    noemiSegarra    : true,
    joneFigueras    : true,
    mirianFuertes   : true,
  };
  
  secciones: Array<string> = [];
  autores: Array<string> = [];
  autoresFormateado: Array<string> = [];
  fecha:string = "";

  filtrar(){
     
    this.noticiasFiltradas = noticias.slice(1);

    this.filtrado = true;

    Object.keys(this.filtroSeccion).map(seccion => {if (this.filtroSeccion[seccion]){this.secciones.push(seccion)}}) //Actualizar array de secciones

    this.autores = [];
    Object.keys(this.filtroAutor).map(autor => {if (this.filtroAutor[autor]){this.autores.push(autor)}}) // Actualizar array de autores

   
    this.autoresFormateado = this.autores.map(autor => {let aux = [autor.slice(0,1).toUpperCase() , autor.slice(1)].join("");// to camelCase
                                                         return aux.match(/([A-Z][a-z]+)/g)!.join(" ")}); // to PascalCase
  
    this.noticiasFiltradas = this.noticiasFiltradas.filter(noticia => this.autoresFormateado.includes(noticia.autor));

    if (this.fecha != "") {
      let aux = this.fecha.match(/(\d+)/g);
      this.fecha = [aux![2],aux![1],aux![0]].join("/"); //Pasar fecha a dd/mm/aaaa

      this.noticiasFiltradas = this.noticiasFiltradas.filter( noticia => noticia.fecha == this.fecha);

    };

    this.secciones.map( seccion => {this.noticiasFiltradas = this.noticiasFiltradas.filter(noticia => noticia.seccion == seccion)})

  };
 
  //Clear
  clearFilter(){
    this.noticiasFiltradas = noticias.slice(1);
    this.secciones = [];
    this.autores = [];
    this.autoresFormateado = [];
    this.fecha = "";
    if(this.enSeccion){
      this.secciones.push(this.seccion);
      this.filtrar();
      return;
    };
    this.filtrado = false;
  };





  constructor() { };

};


