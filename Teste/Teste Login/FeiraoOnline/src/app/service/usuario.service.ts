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
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new", usuario);
  }

  public exibirTodos(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all");
  }

  public recuperaDetalhe(id:number){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/"+id);
  }

  public atualiza(usuario:Usuario){
    console.log(usuario);
    return this.http.put("http://cloud.professorisidro.com.br:8088/usuario/", usuario);
  }

  public login(usuario: Usuario){
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/login", usuario);
  }

  autenticar(cliente: Cliente) {
    return this.http.post("http://localhost:8080/login", cliente);
  }

  buscarInfo(token: string){
    return this.http.get("http://localhost:8080/infoCliente?token="+token);
  }
}
