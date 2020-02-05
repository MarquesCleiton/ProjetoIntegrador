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

  private titulo:    string;
  private id:        number;
  private descricao: string;
  private preco:     number;
  private linkFoto:  string;
  private produto: Produto = new Produto();
  private categoria_id_categoria: string;


  constructor(private srv: ProdutoService,private route: Router) { }

  ngOnInit() {
    
  }

  public enviarProduto(){
    
    if(this.categoria_id_categoria == "Fruta"){
      this.produto.categoria.idCategoria = 1;
    }else if(this.categoria_id_categoria == "Verdura"){
      this.produto.categoria.idCategoria = 2;
    }else{
      this.produto.categoria.idCategoria = 3;
    }
    this.produto.idProduto = null;
    this.produto.titulo = this.titulo;
    this.produto.descricao = this.descricao;
    this.produto.linkFoto = this.linkFoto;
    this.produto.preco = this.preco;
    
    console.log(this.produto);
    this.srv.inseriProdutos(this.produto).subscribe(res =>{
      console.log(res);
      alert("Cadastro realizado com sucesso!!!");
          this.titulo = "";
          this.descricao = "";
          this.linkFoto = "";
          this.preco = null;
          this.categoria_id_categoria = "";
    },
    err => {
       alert("Erro ao realizar o cadastro");
    })

  }

 

}
