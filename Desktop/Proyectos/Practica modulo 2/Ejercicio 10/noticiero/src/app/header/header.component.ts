import { Component } from '@angular/core';
import { StatusService } from '../status.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  secciones = ["opinion","economia","politica","deporte","ciencia"]

  constructor(private status: StatusService) {}
}
