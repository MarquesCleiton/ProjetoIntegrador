import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http:HttpClient) { }

  public listarProdutos(){
    return this.http.get("http://localhost:8088/produtos/todos");
  }

  public listarProdutosId(idProduto: number){
    return this.http.get("http:localhost:8088/produtos/"+idProduto);
  }

  public inseriProdutos(produto: Produto){
    console.log(produto);
    return this.http.post("https://localhost:8080/produto/novo", produto);
  }

  public exibirTodosProdutos(){
    console.log("chegooou exibir")
    return this.http.get("http://localhost:8088/produtos/todos");
  }

  public atualiza(produto:Produto){
    console.log(produto);
    return this.http.put("http://localhost:8080/produto/", produto);
  }
}
