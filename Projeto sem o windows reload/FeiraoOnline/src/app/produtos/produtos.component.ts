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

  produto: Array<Produto> = new Array();
  titulo: string;
  

  constructor(private prod: ProdutoService) {}

  ngOnInit() {
    window.scroll(0,0);
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.produto = res;
    })
  }

  PesquisarPorPalavra() {
    this.isLista =false;
    if (this.titulo != null) {
      this.prod.buscaPorPalavra(this.titulo).subscribe((res: Produto[]) => {
        this.produto = res; 
        console.log(res);
        if(res.length == 0){
          this.produto = null;
        }
      }, err =>{
        this.produto = null;
        alert("TESTE")
      });
     }else{
      this.produto = null;
     }
    }
  
  mostrarTudo() {
    this.isLista = true;
    this.prod.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.produto = res;
    }, erro =>{
      this.produto = null;
    })
  }
}
