import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Pedido } from '../model/pedido';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';
import { Itens } from '../model/Itens';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  private id: number;
  prod: Produto = new Produto();
  pedido: Pedido = new Pedido();
  item:Itens = new Itens();
  quantidade: number;
  cliente: Cliente = new Cliente();

  constructor(private rota:ActivatedRoute,private srv: ProdutoService, private srvUser:UsuarioService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["idProduto"];
    this.srv.listarProdutosId(this.id).subscribe(
      (res: Produto) => {
        this.prod = res;
      },
      (err) => {
        alert("deu ruim")
      }
    )
  }

  public geraPedido(){
    this.pedido.dtPedido = "05/02/2020"
    this.pedido.quantidade = this.quantidade;
    this.srvUser.buscarInfo(localStorage.getItem("MyToken")).subscribe(
      (res: Cliente) => {
        this.pedido.cliente_idcliente = res;
          console.log("USER INFO...");
          console.log(res);
      },
      (err) => {
        console.log("ERRO!!!");
      }
    );

  }

}
