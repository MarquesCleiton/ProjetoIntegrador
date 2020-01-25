import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private nomeCompleto: string;
  private telefone: string;
  private email: string;
  private senha: string;
  private confirmaSenha: string;
  private TesteSenha: boolean;

  private msgNomeCompleto: string;
  private msgTelefone: string;
  private msgEmail: string;
  private msgSenha: string;
  private msgConfirmaSenha: string;

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
  }

  public verificar() {
    this.msgNomeCompleto = this.verificaNomeCompleto(this.nomeCompleto);
    console.log(this.msgNomeCompleto);
    this.msgEmail = this.verificaEmail();
    this.msgTelefone = this.verificaTelefone(this.telefone);
    this.msgSenha = this.verificaSenha(this.senha);
    this.verificaConfirmaSenha();

    if (this.msgNomeCompleto == "" &&
      this.msgEmail == "" &&
      this.msgTelefone == "" &&
      (this.msgSenha == "Senha Forte" || this.msgSenha == "Senha Fraca") &&
      this.msgConfirmaSenha == "") {

      var usuario: Usuario;
      usuario = new Usuario();
      usuario.nome = this.nomeCompleto;
      usuario.email = this.email;
      usuario.telefone = this.telefone;
      usuario.senha = this.senha;

      
      this.srv.insere(usuario).subscribe(
        res => {
          alert("Cadastro realizado com sucesso!!!")
          this.nomeCompleto = "";
          this.email = "";
          this.telefone = "";
          this.senha = "";
          this.confirmaSenha = "";

          this.msgNomeCompleto = "";
          this.msgTelefone = "";
          this.msgNomeCompleto = "";
          this.msgSenha = "";
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