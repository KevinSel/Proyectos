import { Injectable } from '@angular/core';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  persona: Persona = {};

  constructor() {
   }

}
