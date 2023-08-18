import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistroComponent } from './registro/registro.component';
import { FichasComponent } from './fichas/fichas.component';
import { InformacionDisplayComponent } from './informacion-display/informacion-display.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomepageComponent,
    RegistroComponent,
    FichasComponent,
    InformacionDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
