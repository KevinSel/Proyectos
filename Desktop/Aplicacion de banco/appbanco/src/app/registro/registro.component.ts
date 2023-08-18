import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private http: HttpClient, private router: Router, private status: StatusService){}

  
  ngOnInit(){
    this.status.persona == null? this.sesionActiva = false: this.sesionActiva = true;
  }

  registrarse(){
    this.http.post("http://localhost:8080/registrarse", {nombre: this.nombre, apellido:this.apellido, usuario:this.usuario, password:this.password, regGestor:this.regGestor}).subscribe(
    x => { x? this.respuesta = "Se ha registrado correctamente": this.respuesta = "Nombre de usuario utilizado";
          if(!this.sesionActiva){
            if(x){alert(this.respuesta); this.router.navigate(["login"])}
          }
         }
    );
  };

  volver(url: String){
    this.router.navigate([url])
  }
  nombre = "";
  usuario = "";
  apellido = "";
  password = "";
  respuesta = "";
  regGestor = false;
  sesionActiva = false;

}
