import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service'
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public idProduto: number;
  public isLista: boolean = true;

  public listaDeProdutos: Produto[];
  public listaUnica: Produto;
  

  constructor(private prod: ProdutoService) { }

  ngOnInit() {
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.listaDeProdutos = res;
    })
  }

  pesquisarId() {
    this.isLista = false;
    if (this.idProduto != null) {
      this.prod.listarProdutosId(this.idProduto).subscribe((res: Produto) => {
        this.listaUnica = res;
      })
    }else{
      this.listaUnica = null;
    }
    console.log(this.listaUnica);
  }
  
  mostrarTudo() {
    this.isLista = true;
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.listaDeProdutos = res;
    })
  }
}
