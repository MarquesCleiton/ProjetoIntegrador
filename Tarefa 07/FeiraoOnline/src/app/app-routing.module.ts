import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditarComponent } from './editar/editar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'quemsomos', component: QuemSomosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'produtos', component:ProdutosComponent},
  {path:'home', component:HomeComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'listagem', component:ListagemComponent},
  {path:'editar/:id', component: EditarComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
