import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service'
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
   nome: string;
   telefone: string;
   email: string;
   senha: string;
   confirmaSenha: string;
   endereco: string;
   cidade: string;
   cep:string;
   estado: string;

  msgnome: string;
  msgTelefone: string;
  msgEmail: string;
  msgSenha: string;
  msgConfirmaSenha: string;

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
  }

  public verificar() {
    this.msgnome = this.verificaNome(this.nome);
    this.msgEmail = this.verificaEmail();
    this.msgTelefone = this.verificaTelefone(this.telefone);
    this.msgSenha = this.verificaSenha(this.senha);
    this.verificaConfirmaSenha();

    if (this.msgnome          == "" &&
        this.msgEmail         == "" &&
        this.msgTelefone      == "" &&
        (this.msgSenha        == "Senha Forte" || this.msgSenha == "Senha Fraca") &&
        this.msgConfirmaSenha == "") {

      var cliente: Cliente;
      cliente = new Cliente();
      cliente.idCliente = null;
      cliente.nome = this.nome;
      cliente.email = this.email;
      cliente.telefone = this.telefone;
      cliente.senha = this.senha;
      cliente.cep = this.cep;
      cliente.cidade = this.cidade;
      cliente.endereco = this.endereco;
      cliente.estado = this.estado;

      
      this.srv.insere(cliente).subscribe(
        res => {
          alert("Cadastro realizado com sucesso!!!")
          this.nome           = "";
          this.email          = "";
          this.telefone       = "";
          this.senha          = "";
          this.confirmaSenha  = "";
          this.estado         = "";
          this.endereco       = "";
          this.cidade         = "";
          this.cep            = "";

          this.msgnome          = "";
          this.msgEmail         = "";
          this.msgTelefone      = "";          
          this.msgSenha         = "";
          this.msgConfirmaSenha = "";
        },
        err => {
          alert("Erro ao realizar o cadastro");
        }
      )
    } else {
      alert("Por favor, preencha os campos destacados")
      this.verificanumero();
    }
  }
  
  public verificaNome(nome: string): string {
    var filtro: any = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (nome != null || nome == "") { // Verifica se nome é nulo
      if (nome.length >= 3) {

        if (!filtro.test(nome)) {
          console.log("tem numero? : " + filtro.test(nome))
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
      if (this.email.indexOf("@") == -1 && this.email.indexOf(".com") == -1) {
        return "Digite um email válido";
      }
    } else {
      return "Digite seu email";
    }
    return "";
  }

  public verificaTelefone(tel: string): string {
    console.log("verificaTelenone: " + tel);
    if (tel != null) {
      if (tel.length < 14) {
        return "Complete o número";
      } else {
        for (var i = 0; i < this.telefone.length; i++) {
        }
      }
    } else {
      return "Digite seu número";
    }
    return "";
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
      if (this.senha.length >= 10) {
        if (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 ||
          this.senha.indexOf("%") != -1 || this.senha.indexOf("&") != -1) {
          return "Senha Forte";
        } else {
          return "Senha Fraca";
        }
      } else {
        return "Senha muito curta"
      }
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