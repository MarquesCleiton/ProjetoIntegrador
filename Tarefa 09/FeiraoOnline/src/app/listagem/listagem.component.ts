import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public usuario: Usuario[];
  constructor(private srv: UsuarioService) { }

  ngOnInit() {
    this.srv.exibirTodos().subscribe((res: Usuario[]) =>{
      this.usuario = res;
    })
  }

}
