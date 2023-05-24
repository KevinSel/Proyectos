import { Component } from '@angular/core';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje ="";
  registrado=false;
  nombre:string ="";
  apellido:string ="";
  cargo:string = "";
  entradas:Array<{titulo:string}>;

  constructor(private miServicio:ServiciosEmpleadosService) {
    this.entradas=[
    {titulo:"Mi primera entrada de blog"},
    {titulo:"Mi segunda entrada de blog"},
    {titulo:"Mi tercera entrada de blog"},
    {titulo:"Mi cuarta entrada de blog"},
    {titulo:"Mi quinta entrada de blog"},
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado correctamente";
    this.miServicio.muestraMensaje("He incorporado mi servicio");

    } 

}
