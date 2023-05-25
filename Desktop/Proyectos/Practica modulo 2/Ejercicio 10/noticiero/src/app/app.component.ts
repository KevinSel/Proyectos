import { Component } from '@angular/core';
import { noticias } from './noticias';
import { CommonModule } from '@angular/common';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  noticias = noticias;

  goToNoticia(titulo: string){
    this.status.enHome = false;
    this.status.enSeccion = false;
    this.status.enNoticia = true;
    this.status.titulo = titulo;
    this.status.seccion = "";
    console.log(this.status)
  }

  constructor (private status: StatusService){
  }

}
