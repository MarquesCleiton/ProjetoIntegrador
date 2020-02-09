import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Categoria } from '../model/Categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})
export class ProdutosCategoriaComponent implements OnInit {
  busca: boolean = true;
  id: number;
  titulo: string;
  categoria: Categoria = new Categoria();
  produto: Array<Produto> = new Array();
  buscaPalavra: boolean = true;
  constructor(private srv: ProdutoService, private rota: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0);
    this.id = this.rota.snapshot.params["id"];
    console.log(this.id);
this.srv.buuscaPorCategoria(this.id).subscribe((res:Categoria)=>{
        this.categoria = res;
        console.log(this.categoria);
},
(err) => {
  console.log("deu rum");
});
  }

  PesquisarPorPalavra() {
    this.busca =false;
    if (this.titulo != null) {
      this.srv.buscaPorPalavra(this.titulo).subscribe((res: Produto[]) => {
        this.produto = res; 
       if(res.length == 0){
         this.produto == null;
         alert("TESTE2");
       }
      }, err =>{
        this.produto == null;
        alert("TESTE");
      })
     }else{
      this.produto = null;
     }
    }

    mostrarTudo() {
      this.busca = true;
      this.srv.buuscaPorCategoria(this.id).subscribe((res: Produto[]) => {
        this.produto = res;
      }, erro =>{
        this.produto = null;
      });
    }
}

