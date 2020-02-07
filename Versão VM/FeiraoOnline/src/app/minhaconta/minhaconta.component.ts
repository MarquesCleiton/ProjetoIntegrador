import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {
   nome: string;
   telefone: string;
   email: string;
   confirmaSenha: string;
   endereco: string;
   cidade: string;
   cep:string;
   msgnome: string;
   estado: string;
   senha: string;
   senhaNova: string;
   cliente:Cliente = new Cliente();
   msgSenha: string;
  constructor(private srv: UsuarioService, private rota: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe(
      (res: Cliente) => {
        this.cliente = res;
          console.log(res);
          this.buscarInfoCliente();
      },
      (err) => {
        console.log("ERRO!!!");
      }
    );
  }

 
  public buscarInfoCliente(){
    this.srv.recuperaDetalhe(this.cliente.idCliente).subscribe(
      (res:Cliente)=>
    {
      this.cliente = res;
      console.log(this.cliente);
      this.nome = this.cliente.nome;
      this.email = this.cliente.email;
      this.telefone = this.cliente.telefone;
      this.endereco = this.cliente.endereco;
      this.estado = this.cliente.estado;
      this.cidade = this.cliente.cidade;
      this.cep = this.cliente.cep;
    });
  }
  public atualizarCliente(){
    if(this.senha == this.cliente.senha){
      this.cliente.nome = this.nome;
      this.cliente.cep = this.cep;
      this.cliente.cidade = this.cidade;
      this.cliente.email = this.email;
      this.cliente.endereco = this.endereco;
      this.cliente.estado = this.estado;
      this.cliente.senha = this.senhaNova;
      this.cliente.telefone = this.telefone;
      this.cliente.idCliente = this.cliente.idCliente;
    }else{
      console.log(this.senhaNova);
      if(this.senha == null || this.senha == ""){
        this.cliente.nome = this.nome;
        this.cliente.cep = this.cep;
        this.cliente.cidade = this.cidade;
        this.cliente.email = this.email;
        this.cliente.endereco = this.endereco;
        this.cliente.estado = this.estado;
        this.cliente.senha = this.cliente.senha;
        this.cliente.telefone = this.telefone;
        this.cliente.idCliente = this.cliente.idCliente;
      }else{
        this.msgSenha = "senha incorreta"
      }
      
   
    }

      this.srv.atualiza(this.cliente).subscribe(
        res => {
          alert("Atualizado com sucesso");
          this.rota.navigate(['/produtos']);
          this.nome = "";
          this.cep = "";
          this.cidade = "";
          this.email = "";
          this.endereco = "";
          this.estado = "";
          this.senhaNova = "";
          this.telefone = "";
            },
        err => {
          alert("Erro ao atualizar");
        }
      )
    }

  }

