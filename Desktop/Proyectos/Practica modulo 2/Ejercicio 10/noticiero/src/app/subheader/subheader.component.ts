import { Component } from '@angular/core';
import { StatusService } from '../status.service';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
})

export class SubheaderComponent{

  get isLightMode(){
    return this.status.isLightMode;
  }
  changeMode(){
    this.status.isLightMode = !this.status.isLightMode;
  }

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
    return this.status.titulo;
  }
  get seccion():string{
    return this.status.seccion;
  }

  get imgUrl(){
    
    return this.status.urls[this.status.seccion as keyof typeof this.status.urls][0];
  }

  goHome(){
    this.status.setStatus(true,false,false)
  }

  constructor(private status: StatusService) {}  
}
