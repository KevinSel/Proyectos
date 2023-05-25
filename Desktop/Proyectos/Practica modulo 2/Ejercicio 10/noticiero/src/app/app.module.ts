import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdDirective } from './ad.directive';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { FilterTabComponent } from './filter-tab/filter-tab.component';
import { SeccionComponent } from './seccion/seccion.component';
import { NoticiaComponent } from './noticia/noticia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FilterTabComponent,
    SeccionComponent,
    NoticiaComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
