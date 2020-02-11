import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../model/Usuario';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public constructor(private http: HttpClient) { }

  public insere(cliente: Cliente){
    return this.http.post("http://31.220.48.238:8080/cliente/cadastrar", cliente);
  }

  public exibirTodos(){
    return this.http.get("http://31.220.48.238:8080/cliente/todos");
  }

  public recuperaDetalhe(id:number){
    return this.http.get("http://31.220.48.238:8080/cliente/"+id);
  }

  public atualiza(cliente:Cliente){
    return this.http.put("http://31.220.48.238:8080/cliente/atualizar", cliente);
  }

  public login(cliente:Cliente){
    return this.http.post("http://31.220.48.238:8080/login", cliente);
  }

  autenticar(cliente: Cliente) {
    return this.http.post("http://31.220.48.238:8080/login", cliente);
  }

  buscarInfo(token: string){
    return this.http.get("http://31.220.48.238:8080/infoCliente?token="+token);
  }
}
