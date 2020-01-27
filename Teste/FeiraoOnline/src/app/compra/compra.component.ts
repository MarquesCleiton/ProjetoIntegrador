import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  private id: number;
  prod: Produto = new Produto();

  constructor(private rota:ActivatedRoute,private srv: ProdutoService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    console.log(this.id);

    this.srv.listarProdutosId(this.id).subscribe(
      (res: Produto) => {
        this.prod = res;
        console.log(this.prod);
      },
      (err) => {
        alert("deu ruim")
      }
    )
  }

}
