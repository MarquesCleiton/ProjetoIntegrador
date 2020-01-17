import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { Globals } from '../model/Global';
import * as $ from 'jquery';

//Para funcionar o  Jquery é preciso instalar as bibliotecas
//npm install jquery --save
//npm install @types/jquery --save
//Agora é só importar para o projeto
//import * as $ from 'jquery'; 


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ Globals ]
})
export class MenuComponent implements OnInit{
  
  barraPesquisa:string;
  private email: string;
  private senha: string;
  private usuario: Usuario = new Usuario();
  @ViewChild('fechar', {static: false}) close;
  
  constructor(private srv: UsuarioService, private router: Router) { }

  ngOnInit() {
    
  }

  public enviar(){
    this.usuario.email = this.email;
    this.usuario.senha = this.senha;
    console.log(this.email);
    console.log(this.senha);

    this.srv.login(this.usuario).subscribe(
      (res: Usuario) => {
        alert("Login realizado com sucesso");
        this.email = "";
        this.senha = "";
        Globals.USUARIO = res;

        this.router.navigate(['login']);
        $('#modal').hide();
        $('.modal-backdrop').hide();   
      },
      err => {
        alert ("Erro ao realizar Login");
      }
    )
  }

}
