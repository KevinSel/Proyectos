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

  nombre = "";
  usuario = "";
  apellido = "";
  password = "";
  regGestor = false;

  sesionActiva = false;

  respuesta = "";

  volver(url: String){
    this.router.navigate([url])
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

  constructor(private http: HttpClient, private router: Router, private status: StatusService){}

  ngOnInit(){
    this.status.persona == null? this.sesionActiva = false: this.sesionActiva = true;
  }

}
