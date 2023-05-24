import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    
  ],
  providers: [ServiciosEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
