import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path:'registrarse', component: RegistroComponent},
  { path:'login', component: LogInComponent },
  { path:'', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
