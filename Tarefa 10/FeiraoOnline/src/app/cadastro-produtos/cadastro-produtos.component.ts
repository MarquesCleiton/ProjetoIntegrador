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


  constructor(private srv: ProdutoService) { }

  

  ngOnInit() {
  }

  public enviarProduto(){
    var produto: Produto;
    produto = new Produto();
    produto.titulo = this.titulo;
    produto.idProduto = this.id;
    produto.detalhes = this.descricao;
    produto.qtdEstoque = this.estoque;
    produto.preco = this.preco;

    this.srv.inseriProdutos(produto).subscribe(res =>{
      alert("Cadastro realizado com sucesso!!!");
          this.titulo = "";
          produto.idProduto = produto.idProduto + 1;
          this.descricao = "";
          this.estoque = null;
          this.preco = null;
    },
    err => {
       alert("Erro ao realizar o cadastro");
    })

  }

 

}
