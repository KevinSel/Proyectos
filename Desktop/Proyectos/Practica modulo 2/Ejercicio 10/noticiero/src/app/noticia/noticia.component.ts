import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  get isLightMode(){
    return this.status.isLightMode;
  }
  changeMode(){
    this.status.isLightMode = !this.status.isLightMode;
  }

  get noticia_fecha() {
    return this.status.getNoticiaFromTitle().fecha
  }
  get noticia_autor() {
    return this.status.getNoticiaFromTitle().autor
  };
  get noticia_resumen() {
    return this.status.getNoticiaFromTitle().resumen
  };
  get noticia_imgSrc() {
    return this.status.getNoticiaFromTitle().imgSrc
  }
  get noticia_imgAlt() {
    return this.status.getNoticiaFromTitle().imgAlt
  }
  get noticia_cuerpo() {
    return this.status.getNoticiaFromTitle().cuerpo
  }

  constructor(private status: StatusService, private route: ActivatedRoute) {}  

  ngOnInit(){
    this.status.titulo = this.route.snapshot.params['tit']
    this.status.setStatus(false,true,false)
   }

}

