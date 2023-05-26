import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion/seccion.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'noticia/:tit', component: NoticiaComponent},
  {path: 'seccion/:sec', component: SeccionComponent},
  { path: '**', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] ,
})
export class AppRoutingModule { }
