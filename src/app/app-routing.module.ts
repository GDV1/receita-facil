import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaReceitaComponent } from './pagina-receita/pagina-receita.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'receita', component:PaginaReceitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
