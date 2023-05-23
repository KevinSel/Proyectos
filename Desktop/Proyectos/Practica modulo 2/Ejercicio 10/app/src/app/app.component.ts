import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  log = false;
  titulo = "TITULO DE LA NOTICIA" ;
  enSeccion = false;
  enNoticia = false;
  enHome = true;
  seccion = "";
}
