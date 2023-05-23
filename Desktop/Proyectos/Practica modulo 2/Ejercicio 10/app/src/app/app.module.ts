import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsertabComponent } from './components/usertab/usertab.component';
import { SecttabComponent } from './components/secttab/secttab.component';
import { MiniheaderComponent } from './components/miniheader/miniheader.component';
import { LoginComponent } from './components/login/login.component';
import { LoginusertabComponent } from './components/loginusertab/loginusertab.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { RegComponent } from './components/reg/reg.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsertabComponent,
    SecttabComponent,
    MiniheaderComponent,
    LoginComponent,
    LoginusertabComponent,
    IniciosesionComponent,
    HomeComponent,
    SectionComponent,
    RegComponent,
    FiltrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
