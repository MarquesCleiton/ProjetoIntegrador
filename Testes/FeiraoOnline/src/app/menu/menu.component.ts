import { Component, OnInit } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  barraPesquisa:string;
  private email: string;
  private senha: string;
  private usuario: Usuario = new Usuario();
  
  constructor(private srv: UsuarioService) { }

  ngOnInit() {
    
  }

  public enviar(){
    this.usuario.email = this.email;
    this.usuario.senha = this.senha;
    console.log(this.email);
    console.log(this.senha);

    this.srv.login(this.usuario).subscribe(
      res => {
        alert("Login realizado com sucesso");
        this.email = "";
        this.senha = "";

      },
      err => {
        alert ("Erro ao realizar Login");
      }
    )
  }

}
