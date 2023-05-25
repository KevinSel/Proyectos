import { Component } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  fun = this.status.setStatus(true,false,false);

  
  constructor(private status: StatusService) {};

  
}
