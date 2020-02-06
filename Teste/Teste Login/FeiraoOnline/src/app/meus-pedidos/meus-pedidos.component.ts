import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  cliente:Cliente = new Cliente();
  contador:number = 0;
  
  constructor(private srv: UsuarioService) { }
  ngOnInit() {
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
  calcula(quantidade:number, preco:number):number{
    return quantidade*preco;
  }

  cont(total:number){
    this.contador +=total;
  }
}
