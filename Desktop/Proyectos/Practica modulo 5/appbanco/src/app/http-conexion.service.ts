import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})


export class HttpConexionService {

  private baseUrl = "http://localhost:8080/";


  constructor(private http: HttpClient){

  }; 

    
  serverPostRequest(urlEnd: String, param: String, param2: String){
    return this.http.post<any>(`${this.baseUrl}${urlEnd}`, {usuario: param, password: param2});
  }

}

