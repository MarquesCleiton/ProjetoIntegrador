import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { Globals } from '../model/Global';
import { MyToken } from '../model/MyToke';
import * as $ from 'jquery';
import { Cliente } from '../model/Cliente';

//Para funcionar o  Jquery é preciso instalar as bibliotecas
//npm install jquery --save
//npm install @types/jquery --save
//Agora é só importar para o projeto
//import * as $ from 'jquery'; 


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [Globals]
})
export class MenuComponent implements OnInit {

    barraPesquisa: string;
    email: string = "";
    senha: string = "";
    adm: boolean = false;
    cliente:Cliente = new Cliente();
    logado: boolean = false;
  //@ViewChild('fechar', { static: false }) close;

  constructor(private srv: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.infoCliente();
  }

  fechar(){
    $('#fechar').click();
  };

  public enviar() {
    console.log(this.email);
    this.cliente = new Cliente();
    this.cliente.email = this.email;
    this.cliente.senha = this.senha;

    this.srv.autenticar(this.cliente).subscribe(
      (res: MyToken)=>{
        localStorage.setItem("MyToken",res.strToken);
        alert("Logado");
        this.email = "";
        this.senha = "";
        this.logado = true;
        this.infoCliente();
        $('#fechar').click();
      },
      (err)=>{
        alert("Email ou senha inválidos")
        this.logado = false;
        this.adm = false;
      }
    );
  }

  public logout(){
    localStorage.removeItem("MyToken");
    this.cliente = null;
    this.logado = false;
    this.adm = false;
    this.router.navigate(['/home']);
  }

  infoCliente(){
    this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe(
      (res: Cliente) => {
        this.cliente = res;
        this.logado = true;
        if(this.cliente.email == "feiraoonlinecontato@gmail.com"){
          this.adm = true
        }
      },
      (err) => {
        this.logado = false;
        this.adm = false;
      }
    );
  }
}
