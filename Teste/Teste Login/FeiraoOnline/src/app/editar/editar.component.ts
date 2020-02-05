import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute } from '@angular/router';
import { StringifyOptions } from 'querystring';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

   nome: string;
   sobrenome: string;
   telefone: string;
   email: string;
   senha: string;
   confirmaSenha: string;
   endereco: string;
   cidade: string;
   estado: string;
   cep: string;


   TesteSenha: boolean;

   msgNomeCompleto: string;
   msgTelefone: string;
   msgEmail: string;
   msgSenha: string;
   msgConfirmaSenha: string;

   id:number;
  public user:Cliente = new Cliente();

  constructor(private rota:ActivatedRoute, private srv: UsuarioService) { 
  }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    console.log(this.id);
    this.srv.recuperaDetalhe(this.id).subscribe((res:Cliente)=>
    {
      this.user = res;
      this.nome = this.user.nome;
      this.cep = this.user.cep;
      this.cidade = this.user.cidade;
      this.estado = this.user.estado;
      this.endereco = this.user.endereco;
      this.telefone = this.user.telefone;
      this.email = this.user.email;
      this.senha = this.user.senha;
      this.confirmaSenha = this.user.senha;
    });
  }

  public verificar() {

    this.msgNomeCompleto = "";
    this.msgTelefone = "";
    this.msgEmail = ""
    this.msgSenha = "";
    this.msgConfirmaSenha = "";
    this.msgSenha = "";

    if (this.msgNomeCompleto == "" &&
      this.msgEmail == "" &&
      this.msgTelefone == "" &&
      this.msgSenha == "" &&
      this.msgConfirmaSenha == "") {

      var cliente: Cliente;
      cliente = new Cliente();
      cliente.idCliente = this.user.idCliente;
      cliente.nome = this.nome;
      cliente.email = this.email;
      cliente.telefone = this.telefone;
      cliente.senha = this.senha;
      cliente.cep = this.cep;
      cliente.cidade = this.cidade;
      cliente.endereco = this.endereco;
      cliente.estado = this.estado;

  
      this.srv.atualiza(cliente).subscribe(
        (res) => {
          alert("Atualizado com sucesso!!!")
        },
        (err) => {
          alert("Erro ao realizar a atualização");
        }
      )
    } else {
      alert("Por favor, preencha os campos destacados")
      this.verificanumero();
    }
  }

  public verificaNomeCompleto(nome: string): string {
    console.log("Nome: " + nome);
    var filtro: any = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (nome != null || nome == "") { // Verifica se nome é nulo
      if (nome.length >= 3) {
        if (!filtro.test(nome)) {
          return "Não pode haver números";
        } else {
          return "";
        }
      } else {
        return "Digite pelo menos 3 letras";
      }
    } else {
      return "Não pode ser vazio";
    }
  }

  public verificaEmail() {
    if (this.email != null) {
    } else {
      return "Digite seu email";
    }
    return "";
  }

  public verificaTelefone(tel: string): string {
    console.log("verificaTelenone: " + tel);
    if (tel != null) {
      return "";
    } else {
      return "Digite seu número";
    }
  }

  public formataTelefone(event) {
    console.log("teste");
    if (this.telefone == null || this.telefone.length == 0 || this.telefone == " ") {
      this.telefone = "("
    } else if (this.telefone.length == 3) {
      this.telefone += ") ";
    } else if (this.telefone.length == 9) {
      this.telefone += "-";
    } else {
      this.verificanumero();
    }
  }

  public verificanumero() {
    console.log("verificaNumero: " + this.telefone);
    if (this.telefone != null) {
      var uc: string = this.telefone.charAt(this.telefone.length - 1);
      console.log(uc);
      if (this.telefone.length != 1 && this.telefone != "(") {
        console.log("entrou no if?");
        if (uc != "0" && uc != "1" && uc != "2" && uc != "3" && uc != "4"
          && uc != "5" && uc != "6" && uc != "7" && uc != "8" && uc != "9") {
          this.telefone = this.telefone.substring(0, this.telefone.length - 1);
        }
      }
    }
  }

  public vs() {
    this.msgSenha = this.verificaSenha(this.senha);
  }
  public verificaSenha(senha: string): string {
    
    if (this.senha != null || this.senha == "") {
      return "";
    } else {
      return "Digite uma senha"
    }
  }

  public verificaConfirmaSenha() {
    console.log("teste")
    if (this.confirmaSenha != null || this.confirmaSenha == "") {

      if (this.senha != this.confirmaSenha) {
        this.msgConfirmaSenha = "Senhas não conferem";
      } else {
        this.msgConfirmaSenha = "";
      }
    } else {
      this.msgConfirmaSenha = "Senhas não conferem";
    }
  }
}
