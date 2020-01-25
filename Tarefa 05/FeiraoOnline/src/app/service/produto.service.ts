import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http:HttpClient) { }

  public listarProdutos(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/produtos");
  }

  public listarProdutosId(idProduto: number){
    return this.http.get("http://cloud.professorisidro.com.br:8088/produtos/"+idProduto);
  }
}
