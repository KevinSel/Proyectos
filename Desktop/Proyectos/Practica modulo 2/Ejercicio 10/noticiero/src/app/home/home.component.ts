import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  get noticias(){
    if (this.status.noticiasFiltradas[0] == undefined){
      this.status.seccion = "Esta seccion no existe o no tiene contenido";
      return [this.status.noticias[0]];
    } else {
    return this.status.noticiasFiltradas
   }
  }

  get filtrado(){
    return this.status.filtrado;
  }

  constructor (private status: StatusService){
  }

  ngOnInit() {
    this.status.setStatus(true,false,false)
    this.status.clearFilter();
    this.status.filtrado = false;
  }

}
