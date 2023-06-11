import { Component } from '@angular/core';
import { StatusService } from '../status.service';
import { Router } from '@angular/router';
import { HttpConexionService } from '../http-conexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cerrarSesion(){
    this.httpCs.serverGetRequest("login/logoff").subscribe(() => {this.router.navigate(["login"])});
    this.status.persona = null;
  }

  constructor(private status: StatusService, private router: Router, private httpCs: HttpConexionService){}
}
