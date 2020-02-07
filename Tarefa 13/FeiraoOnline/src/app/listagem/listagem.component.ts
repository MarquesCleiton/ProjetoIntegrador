import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Cliente } from '../model/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public cliente: Cliente[];
  
clienteseg: Cliente = new Cliente;
  constructor(private srv: UsuarioService, private route: Router, private validar: UsuarioService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.validar.buscarInfo(localStorage.getItem("MyToken")).subscribe((res: Cliente) => {
      this.clienteseg = res;
      if(this.clienteseg.email != "feiraoonlinecontato@gmail.com"){
      this.route.navigate(['/home']);
      }
    },
    (err) => {
    })

    this.srv.exibirTodos().subscribe((res: Cliente[]) =>{
      this.cliente = res;
    })
  }

}
