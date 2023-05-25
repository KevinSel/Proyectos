import { Component } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
})
export class SubheaderComponent {

  stat = this.status.getData()
  goHome(){
    this.status.enNoticia = false;
    this.status.enSeccion = false;
    this.status.enHome = true;
    this.status.titulo = "";
    this.status.seccion = "";
    console.log(this.status)
  }

  constructor(private status: StatusService) {}
}
