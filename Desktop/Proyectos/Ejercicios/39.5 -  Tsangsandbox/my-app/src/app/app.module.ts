import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component3Component } from './components/component3/component3.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Pipe1Pipe } from './pipes/pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Component3Component,
    Directive1Directive,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
