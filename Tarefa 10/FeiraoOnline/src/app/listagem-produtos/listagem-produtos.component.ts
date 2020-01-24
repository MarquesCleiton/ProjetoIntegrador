import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  private produto: Produto[];



  constructor(private srv: ProdutoService,private rota: ActivatedRoute) { }

  ngOnInit() {

    this.srv.exibirTodosProdutos().subscribe((res: Produto[])=>{
      this.produto = res;
    }),
    (err =>{
      alert("deu errado")
    });
  }
  private p1: Produto;
  private teste : boolean;

  public apagar(id: number){
    console.log(id);
    this.srv.apagar(id).subscribe((res) => {
      alert("apagado com sucesso");
      document.location.reload(true);
      },
    (err) => {
      alert("sem sucesso no delete")
    })
  }

}
