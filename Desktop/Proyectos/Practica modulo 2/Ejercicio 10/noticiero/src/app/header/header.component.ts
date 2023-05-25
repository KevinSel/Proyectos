import { Component } from '@angular/core';
import { StatusService } from '../status.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  secciones = ["media","economia","politica","deportes","ciencia"]
  goToSeccion(seccion: string){
    this.status.enHome = false;
    this.status.enNoticia = false;
    this.status.enSeccion = true;
    this.status.titulo = "";
    this.status.seccion = seccion;
    console.log(this.status)
  }
  
  constructor(private status: StatusService) {}
}
