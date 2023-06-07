import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpConexionService } from '../http-conexion.service';
import { Saludo } from '../saludo';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})



export class LogInComponent {

  datos: Saludo = {
    id:0,
    content:"default"
  }


  showData(){
    this.http.getSaludo().subscribe((datosRecibidos: Saludo) => {
      this.datos.id = datosRecibidos.id;
      this.datos.content = datosRecibidos.content;})
      console.log(this.datos)
  }


  constructor(private http: HttpConexionService){
  };


};


