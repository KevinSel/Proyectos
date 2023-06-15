import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpConexionService } from './http-conexion.service';
import { Router } from '@angular/router';
type usuario = Persona | null;
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  
  persona: usuario = null;

  constructor(private http: HttpConexionService, private router: Router) {
  }

  sesionActiva(){
    this.http.serverGetRequest("login/usuario").subscribe(
      {next:  (x) => 
              {this.persona = x;
              if(this.persona == null){this.router.navigate(["login"])}
            },
       error: () => {this.router.navigate(["login"])}
     }
    )
  }

  sesionNoActiva(){
    this.http.serverGetRequest("login/usuario").subscribe( x => {this.persona = x;
      if(this.persona != null){this.router.navigate([""])}})
  }

}