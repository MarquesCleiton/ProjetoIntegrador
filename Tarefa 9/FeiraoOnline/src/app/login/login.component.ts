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
private usuario: Usuario;
  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = Globals.USUARIO;
    if (!this.usuario){
      this.router.navigate(['/login']);
    }
    else {
      this.usuario = Globals.USUARIO;
    }
  }

}
