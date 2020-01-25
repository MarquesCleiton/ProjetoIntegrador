import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  {path:'', redirectTo:'/quemsomos', pathMatch:'full'},
  {path:'quemsomos', component: QuemSomosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'produtos', component:ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
