import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http:HttpClient) { }


  public listarProdutosId(idProduto: number){
    return this.http.get("http://localhost:8080/produto/"+idProduto);
  }

  public inseriProdutos(produto: Produto){
    console.log(produto);
    return this.http.post("http://localhost:8080/produto/cadastrar", produto);
  }

  public buscaPorPalavra(titulo: string){
    return this.http.get("http://localhost:8080//buscar/palavra/"+titulo)
  }

  
  public exibirTodosProdutos(){
    console.log("chegooou exibir")
    return this.http.get("http://localhost:8080/produto/todos");
  }

  public atualiza(produto:Produto){
    console.log(produto);
    return this.http.put("http://localhost:8080/produto/atualizar", produto);
  }

  public apagar(idProduto: number){
    return this.http.delete("http://localhost:8080/produto/apagar/"+ idProduto);
  }

  buuscaPorCategoria(id: number){
    return this.http.get("http://localhost:8080/categoria/listagem/"+id);
  }

  buscaReversa(){
    return this.http.get("http://localhost:8080//buscar/reversa");
  }


  
}
