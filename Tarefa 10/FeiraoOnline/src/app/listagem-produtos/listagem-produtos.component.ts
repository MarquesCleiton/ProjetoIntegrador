import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  private produto: Produto[];



  constructor(private srv: ProdutoService) { }

  ngOnInit() {
    this.srv.exibirTodosProdutos().subscribe((res: Produto[])=>{
      this.produto = res;
    }),
    (err =>{
      alert("deu errado")

    });
  }

}
