import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute } from '@angular/router';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  private titulo:    string;
  private linkFoto: string;
  private id:        number;
  private descricao: string;
  private estoque  : number;
  private preco    : number;
  public produto: Produto = new Produto();

  constructor(private rota:ActivatedRoute,private srv: ProdutoService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    console.log(this.id);
    this.srv.listarProdutosId(this.id).subscribe((res: Produto) =>
    {
      this.produto = res;
      this.linkFoto = this.produto.linkFoto;
      console.log(this.produto.linkFoto);
      this.titulo = this.produto.titulo;
      this.descricao = this.produto.detalhes;
      this.preco = this.produto.preco;
      this.estoque = this.produto.qtdEstoque
    },(err) => {

      alert ("deu ruim");

    })
  }

  public atualizarProduto(){
    
    this.produto.detalhes = this.descricao;
    this.produto.idProduto = this.id;
    this.produto.titulo = this.titulo;
    this.produto.qtdEstoque = this.estoque;
    this.produto.preco = this.preco;
    console.log(this.produto);
    this.srv.atualiza(this.produto).subscribe((res) => {
      alert("Atualizado com sucesso!!!")
    },
    (err) =>{
      alert("sem sucesso!!!")
    });


  }

}
