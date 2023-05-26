import { Component } from '@angular/core';
import { StatusService } from '../status.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
})
export class SubheaderComponent {
 
  get enHome():boolean {
    return this.status.enHome;
  }
  get enSeccion():boolean {
    return this.status.enSeccion;
  }
  get enNoticia():boolean {
    return this.status.enNoticia;
  }
  get titulo():string{
    return this.status.noticias[this.status.id].titulo;
  }
  get seccion():string{
    return this.status.seccion;
  }

  goHome(){
      this.status.enNoticia = false;
      this.status.enSeccion = false;
      this.status.enHome = true;
  }

  constructor(private status: StatusService, private activatedRoute: ActivatedRoute) {}

  ask = this.activatedRoute.snapshot.params['sec']
  
 

}
