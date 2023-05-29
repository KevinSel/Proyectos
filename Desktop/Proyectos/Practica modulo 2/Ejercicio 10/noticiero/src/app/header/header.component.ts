import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  secciones = ["opinion","economia","politica","deporte","ciencia"]

  get isLightMode(){
    return this.status.isLightMode;
  }
  changeMode(){
    this.status.isLightMode = !this.status.isLightMode;
  }

  constructor(private status: StatusService, private commonModule: CommonModule) {}
}
