import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  public inseriProdutos(pedido: Pedido){
    return this.http.post("http://31.220.48.238:8080/pedido/cadastrar", pedido);
  }

  
  public apagarPedido(id: number){
    return this.http.delete("http://31.220.48.238:8080/pedido/apagar/"+ id);
  }

  public concluirCompra(){
    return this.http.delete("http://31.220.48.238:8080/pedido/concluircompra");
  }
}
