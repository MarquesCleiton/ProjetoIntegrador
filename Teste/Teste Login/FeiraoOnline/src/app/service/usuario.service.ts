import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../model/Usuario';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public constructor(private http: HttpClient) { }

  public insere(usuario: Usuario){
    return this.http.post("http://localhost:8080/cliente/cadastrar", usuario);
  }

  public exibirTodos(){
    return this.http.get("http://localhost:8088/cliente/todos");
  }

  public recuperaDetalhe(id:number){
    return this.http.get("http://localhost:8080/cliente/"+id);
  }

  public atualiza(usuario:Usuario){
    console.log(usuario);
    return this.http.put("http://localhost:8088/cliente/atualizar", usuario);
  }

  public login(usuario: Usuario){
    return this.http.post("http://localhost:8080/login", usuario);
  }

  autenticar(cliente: Cliente) {
    return this.http.post("http://localhost:8080/login", cliente);
  }

  buscarInfo(token: string){
    return this.http.get("http://localhost:8080/infoCliente?token="+token);
  }
}
