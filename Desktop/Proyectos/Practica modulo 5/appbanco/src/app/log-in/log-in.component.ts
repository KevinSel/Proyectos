import { Component } from '@angular/core';
import { HttpConexionService } from '../http-conexion.service';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  usuario: String = "";
  password: String = "";
  sesion: String = "";

 logIn(){
  this.http.serverPostRequest("login",this.usuario,this.password).subscribe(x => 
   {  this.status.persona = x;
      
  })
  console.log(this.status.persona); 
 }

  constructor(private http: HttpConexionService, private router: Router, private status: StatusService){

  }


}
