import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public cliente: Cliente[];
  constructor(private srv: UsuarioService) { }

  ngOnInit() {
    this.srv.exibirTodos().subscribe((res: Cliente[]) =>{
      this.cliente = res;
    })
  }

}
