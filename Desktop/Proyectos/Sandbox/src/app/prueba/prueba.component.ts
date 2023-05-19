import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
 algunid = "1";
 alguncolor = "blue";
 canClick = false;
 algunmensaje = "Yo cambio de color";
 message = "Posible!";
 num = 0;

 changeColor() {
  if (this.alguncolor == "blue"){
    this.alguncolor = "red";
  }
  else{
    this.alguncolor = "blue";
  }
  this.num ++;
 };

  clickButton() {
    this.canClick = !this.canClick;
    if (!this.canClick) {
      this.message = 'Posible cambiar color!';
    } else {
      this.message = "Imposible!";
    }
  }


 };

