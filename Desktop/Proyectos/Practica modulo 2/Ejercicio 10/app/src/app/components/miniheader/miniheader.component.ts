import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniheader',
  templateUrl: './miniheader.component.html',
  styleUrls: ['./miniheader.component.css']
})
export class MiniheaderComponent {

  goTo(sect:string){
    this.seccion = sect;
    this.enHome = false;
    this.enNoticia = false;
    this.enSeccion = true;
  }

  constructor() { }
  ngOnInit(): void {
  }
 
}

