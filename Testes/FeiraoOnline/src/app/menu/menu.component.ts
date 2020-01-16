import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router} from '@angular/router';


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
  router: Router;

  constructor(router: Router, private srv: UsuarioService) { 
    this.router = router;
  }

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
        this.router.navigate(['/home']);
      },
      err => {
        alert ("Erro ao realizar Login");

      }
    )
  }
}
