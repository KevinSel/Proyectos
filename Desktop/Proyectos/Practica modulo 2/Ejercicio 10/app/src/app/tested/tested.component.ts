import { Component } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-tested',
  template: '<p>{{ text }}</p>',
  styleUrls: ['./tested.component.css']
})
export class TestedComponent {
  
  get text(): string {
    return this.teest.test;
  }

  constructor (private teest:TestService){}


}
