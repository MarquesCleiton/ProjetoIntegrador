import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service'
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public isLista: boolean = true;

  public listaDeProdutos: Produto[];
  produto: Array<Produto> = new Array();
  titulo: string;
  

  constructor(private prod: ProdutoService) {}

  ngOnInit() {
    window.scroll(0,0);
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.listaDeProdutos = res;
    })
  }

  PesquisarPorPalavra() {
    this.isLista =false;
    if (this.titulo != null) {
      this.prod.buscaPorPalavra(this.titulo).subscribe((res: Produto[]) => {
        this.produto = res; 
       console.log(this.produto); });
     }else{
      this.produto = null;
     }
    }
  
  mostrarTudo() {
    this.isLista = true;
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.listaDeProdutos = res;
    })
  }
}
