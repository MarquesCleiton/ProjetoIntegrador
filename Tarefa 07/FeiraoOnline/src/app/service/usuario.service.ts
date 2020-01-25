import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../model/Usuario';

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
}
