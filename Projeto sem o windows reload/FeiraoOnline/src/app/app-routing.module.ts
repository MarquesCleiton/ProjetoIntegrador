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
import { DuvidasComponent } from './duvidas/duvidas.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { MinhacontaComponent } from './minhaconta/minhaconta.component';
import { CompraComponent } from './compra/compra.component';
import { ProdutosCategoriaComponent } from './produtos-categoria/produtos-categoria.component';
import { RedirecionaComponent } from './redireciona/redireciona.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'quemsomos', component: QuemSomosComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'listagem', component:ListagemComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastroprodutos', component: CadastroProdutosComponent},
  {path: 'listagemprodutos', component: ListagemProdutosComponent},
  {path: 'editarproduto/:id', component: EditarProdutoComponent},
  {path: 'duvidas', component: DuvidasComponent},
  {path: 'carrinho', component: MeusPedidosComponent},
  {path: 'minhaconta', component: MinhacontaComponent},
  {path: 'produtoscategoria/:id', component: ProdutosCategoriaComponent},
  {path: 'compra/:idProduto', component: CompraComponent},
  {path: 'redireciona/:pagina', component: RedirecionaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
