import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  template: '<button (click)="act(acto)"></button> <button (click)="act(acto2)"></button> <app-tested></app-tested>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  acto = "aaa"
  acto2 = "bbb"

  act(str:string){
    this.teest.test = str;
    console.log(this.teest.test)
  }

  constructor (private teest:TestService){}

}


