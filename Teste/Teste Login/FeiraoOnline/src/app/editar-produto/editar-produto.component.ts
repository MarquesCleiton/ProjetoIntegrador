import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

   titulo:    string;
   linkFoto: string;
   id:        number;
   descricao: string;
   estoque  : number;
   preco    : number;
   categoria_id_categoria: string;
   aux: number;
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
      this.descricao = this.produto.descricao;
      this.preco = this.produto.preco;
      this.aux = this.produto.categoria.idCategoria;
      if(this.aux == 1){
        this.categoria_id_categoria = "Fruta";
      }else if(this.aux == 2){
        this.categoria_id_categoria = "Verdura"
      }else{
        this.categoria_id_categoria = "Legume"
      }

    },(err) => {

      alert ("deu ruim");

    })
  }

  public atualizarProduto(){
    
    this.produto.descricao = this.descricao;
    this.produto.idProduto = this.id;
    this.produto.titulo = this.titulo;
    if(this.categoria_id_categoria == "Fruta"){
      this.produto.categoria.idCategoria = 1;
    }else if(this.categoria_id_categoria == "Verdura"){
      this.produto.categoria.idCategoria = 2;
    }else{
      this.produto.categoria.idCategoria = 3;
    }
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
