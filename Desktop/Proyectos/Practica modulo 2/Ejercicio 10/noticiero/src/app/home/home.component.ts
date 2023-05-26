import { Component, OnInit } from '@angular/core';
import { noticias } from '../noticias';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  noticias = noticias.slice(1);

 

  constructor (private status: StatusService){
  }

  ngOnInit(): void {
    this.status.setStatus(true,false,false)
  }

}
