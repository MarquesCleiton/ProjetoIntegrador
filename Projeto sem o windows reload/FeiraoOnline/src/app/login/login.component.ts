import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Global';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ]
})
export class LoginComponent implements OnInit {
usuario: Usuario;
  constructor(private router: Router) {
  }

  ngOnInit() {
    window.scroll(0,0);
    this.usuario = Globals.USUARIO;
    if (!this.usuario){
      this.router.navigate(['/home']);
    }
    else {
      this.usuario = Globals.USUARIO;
    }
  }

}
