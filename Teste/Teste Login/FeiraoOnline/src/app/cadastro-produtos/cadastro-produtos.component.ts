import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../service/produto.service';
import { Usuario } from '../model/Usuario';
import { Globals } from '../model/Global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
  providers: [ Globals ]
})
export class CadastroProdutosComponent implements OnInit {

  private usuario: Usuario;
  private titulo:    string;
  private id:        number;
  private descricao: string;
  private estoque:   number;
  private preco:     number;
  private linkFoto:  string;
  private produto: Produto = new Produto();


  constructor(private srv: ProdutoService,private route: Router) { }

  ngOnInit() {
  }

  public enviarProduto(){

    this.produto.idProduto = this.id;
    this.produto.titulo = this.titulo;
    this.produto.detalhes = this.descricao;
    this.produto.linkFoto = this.linkFoto;
    this.produto.qtdEstoque = this.estoque;
    this.produto.preco = this.preco;

    this.srv.inseriProdutos(this.produto).subscribe(res =>{
      console.log(this.produto);
      alert("Cadastro realizado com sucesso!!!");
          this.titulo = "";
          this.id = null;
          this.descricao = "";
          this.linkFoto = "";
          this.estoque = null;
          this.preco = null;
    },
    err => {
       alert("Erro ao realizar o cadastro");
    })

  }

 

}
