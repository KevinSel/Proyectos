import { Component } from '@angular/core';
import { StatusService } from './status.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'appbanco';

  constructor(private status: StatusService, private location: Location){
    
  }

  ngOnInit(){
    if( this.location.path() != "/login" && this.location.path() != "/registrarse") {this.status.sesionActiva();
    } else { this.status.sesionNoActiva()}
  }

}
