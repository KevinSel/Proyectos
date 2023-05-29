import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})



export class SeccionComponent implements OnInit{
  get isLightMode(){
    return this.status.isLightMode;
  }
  changeMode(){
    this.status.isLightMode = !this.status.isLightMode;
  }
  get noticias(){
    console.log(this.status.noticiasFiltradas)
    if (this.status.noticiasFiltradas[0] == undefined){
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
        if(!["economia","politica","deporte","ciencia","opinion"].includes(sec!)){this.status.seccion = "Esta seccion no existe"}
        else {this.status.seccion = sec!};
        this.status.clearFilter();
    })

  }
}
