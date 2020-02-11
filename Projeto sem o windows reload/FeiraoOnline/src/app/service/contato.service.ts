import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http:HttpClient) { }

  public enviarEmail(contato: Contato){
    return this.http.post("http://31.220.48.238:8080/contato/email", contato )
  }
}
