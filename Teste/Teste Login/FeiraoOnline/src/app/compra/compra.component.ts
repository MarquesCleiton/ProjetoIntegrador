import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Pedido } from '../model/pedido';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';
import { Itens } from '../model/Itens';
import { PedidoService } from '../service/pedido.service';

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

  constructor(private rota:ActivatedRoute,private srv: ProdutoService, private srvUser:UsuarioService,
    private psrv:PedidoService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["idProduto"];
    this.srvUser.buscarInfo(localStorage.getItem("MyToken")).subscribe(
      (res: Cliente) => {
        this.cliente = res;
      },
      (err) => {
      }
    );
    
    this.srv.listarProdutosId(this.id).subscribe(
      (res: Produto) => {
        this.prod = res;
      },
      (err) => {
        console.log("Não foi possível buscar o produto");
      }
    )
  }
  public geraPedido(){
    this.pedido.quantidade = 5;
    this.pedido.cliente = this.cliente;
    this.item.produto.idProduto = this.prod.idProduto;
    this.pedido.itens.push(this.item); 
    this.psrv.inseriProdutos(this.pedido).subscribe(res =>{
      alert("Produto Comprado com sucesso!!!");
    },
    err => {
       alert("Não foi possivel efetuar a compra");
    });
  }
}
