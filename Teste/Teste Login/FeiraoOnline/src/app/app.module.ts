import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
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
import { CompraComponent } from './compra/compra.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { MinhacontaComponent } from './minhaconta/minhaconta.component';
import { ProdutosCategoriaComponent } from './produtos-categoria/produtos-categoria.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuemSomosComponent,
    ContatoComponent,
    RodapeComponent,
    ProdutosComponent,
    HomeComponent,
    CadastroComponent,
    ListagemComponent,
    EditarComponent,
    LoginComponent,
    DuvidasComponent,
    CadastroProdutosComponent,
    ListagemProdutosComponent,
    EditarProdutoComponent,
    CompraComponent,
    MeusPedidosComponent,
    MinhacontaComponent,
    ProdutosCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
