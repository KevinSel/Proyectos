import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Saludo } from './saludo';


@Injectable({
  providedIn: 'root'
})


export class HttpConexionService {

  private baseUrl = "http://localhost:8080/greeting";


  constructor(private http: HttpClient){

  };

    
  getSaludo(){
    return this.http.get<Saludo>(this.baseUrl);
  }

}

