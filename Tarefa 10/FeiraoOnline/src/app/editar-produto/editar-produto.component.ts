import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  private titulo:    string;
  private id:        number;
  private descricao: string;
  private estoque  : number;
  private preco    : number;


  constructor(private srv: ProdutoService) { }

  ngOnInit() {
  }

  public atualizarProduto(){
    var produto: Produto;
    produto = new Produto();
    produto.detalhes = this.descricao;
    produto.idProduto = this.id;
    produto.titulo = this.titulo;
    produto.qtdEstoque = this.estoque;
    produto.preco = this.preco;
    console.log(produto);

    this.srv.atualiza(produto).subscribe((res) => {
      alert("Atualizado com sucesso!!!")
    },
    (err) =>{
      alert("sem sucesso!!!")
    });


  }

}
