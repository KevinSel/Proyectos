import { Component } from '@angular/core';
import { StatusService } from '../status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cerrarSesion(){
    this.status.persona = {};
  }

  persona = this.status.persona;

  constructor(private status: StatusService, private router: Router){
  }

  ngOnInit(){
   
  }

}
