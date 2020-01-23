import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  private titulo:    string;
  private id:        number;
  private descricao: string;
  private estoque:   number;
  private preco:     number;
  private linkFoto:  string;
  private produto: Produto = new Produto();

  constructor(private srv: ProdutoService) { }

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
