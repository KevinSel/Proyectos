import { Component } from '@angular/core';
import { StatusService } from '../status.service';
import { noticias } from '../noticias';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  noticia = this.status.noticias[this.status.id];
  constructor(private status:StatusService) {};

}
