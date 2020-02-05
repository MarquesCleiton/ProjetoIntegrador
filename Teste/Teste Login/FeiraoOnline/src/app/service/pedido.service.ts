import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  public inseriProdutos(pedido: Pedido){
    return this.http.post("http://localhost:8080/pedido/cadastrar", pedido);
  }

}
