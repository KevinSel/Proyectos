import { Component, NgZone } from '@angular/core';
import { noticias } from '../noticias';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  noticias = noticias;

  goToNoticia(id: number){
    this.zone.run( () => {
    this.status.id = id;
    this.status.enHome = false;
    this.status.enSeccion = false;
    this.status.enNoticia = true;})
  }

  constructor (private status: StatusService, private zone: NgZone){
  }

}
