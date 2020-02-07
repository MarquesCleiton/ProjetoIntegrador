import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { UsuarioService } from '../service/usuario.service';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  cliente:Cliente = new Cliente();
  contador:number = 0;
  id: number;

  ptotal:number = 0;
  qtdPedidos = 0;
  aux = 0;
  
  constructor(private srv: UsuarioService, private user: PedidoService) { }
  ngOnInit() {
    window.scroll(0,0);
    this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe(
      (res: Cliente) => {
        this.cliente = res;
          console.log(res);
          this.buscarInfoCliente();
      },
      (err) => {
        console.log("ERRO!!!");
      }
    );
  }
  public buscarInfoCliente(){
    this.srv.recuperaDetalhe(this.cliente.idCliente).subscribe(
      (res:Cliente)=>
    {
      this.cliente = res;
      console.log(res);
    });
  }

  public apagarPedido(id: number){
    this.user.apagarPedido(id).subscribe((res: string) => {
      window.location.reload();
      },
    (err) => {
      alert("sem sucesso no delete")
    })
  }

  public concluirCompra(){
    this.user.concluirCompra().subscribe(res => {
     
      alert("Parabens compra efetuada com sucesso");
      window.location.reload();
    }, 
    err => {
      alert("compra não efetuada");
    })
  }

  calcula(quantidade:number, preco:number):number{
    return quantidade*preco;
  }

  cont(total:number){
    this.ptotal +=total;
  }

  ajustaPreco(preco:number):number{
    return preco;
  }

  contPedidos(){
    this.qtdPedidos +=1;
  }
}
