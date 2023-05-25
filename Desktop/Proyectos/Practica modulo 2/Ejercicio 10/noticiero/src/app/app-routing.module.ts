import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion/seccion.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SubheaderComponent } from './subheader/subheader.component';

const routes: Routes = [
  {path: 'seccion/:sec', component: SeccionComponent},
  {path: 'noticia/:titulo', component: NoticiaComponent},
  {path: '', component: SubheaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
