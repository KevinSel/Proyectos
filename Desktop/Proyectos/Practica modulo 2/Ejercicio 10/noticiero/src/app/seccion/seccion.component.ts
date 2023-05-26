import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { StatusService } from '../status.service';
import { noticias } from '../noticias';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})



export class SeccionComponent implements OnInit{

  noticias: any;

  getNoticiaFromTitle(){

  };

  constructor(private status: StatusService, private route: ActivatedRoute) {}  

 ngOnInit(){
  this.status.seccion = this.route.snapshot.params['sec']
  this.status.setStatus(false,false,true)
  let noticia = this.status.noticias.filter(noticia => noticia.seccion == this.status.seccion)
  if (noticia[0] == undefined) {
    this.status.seccion = "Esta seccion no existe o no tiene contenido";
    this.noticias = [noticias[0]];
  } else{
    this.noticias = noticia;
  }
 }
}
