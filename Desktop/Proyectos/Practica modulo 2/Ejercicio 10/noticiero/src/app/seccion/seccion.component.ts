import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})



export class SeccionComponent implements OnInit{

  get noticias(){
    if (this.status.noticiasFiltradas[0] == undefined){
      this.status.seccion = "Esta seccion no existe o no tiene contenido";
      return [this.status.noticias[0]];
    } else {
    return this.status.noticiasFiltradas
   }
  }



  constructor(private status: StatusService, private route: ActivatedRoute) {}  

  ngOnInit(){
    this.status.setStatus(false,false,true)

    this.route.paramMap.subscribe(
      (params) => {
        const sec = params.get('sec');
        this.status.seccion = sec!;
        this.status.clearFilter();
    })

  }
}
