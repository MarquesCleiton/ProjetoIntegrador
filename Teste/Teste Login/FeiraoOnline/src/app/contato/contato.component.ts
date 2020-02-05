import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
   nome:  string;
   sobrenome: string;
   email: string;
   telefone: string;
   tipoContato: string;
   assunto: string;
   mensagem: string;
  contato: Contato = new Contato();
   msgNome: string;
   msgSobreNome: string;
   msgTel: string;
   msgTipoContato: string;
   msgEmail: string;
   msgAssunto: string;
   msgMensagem: String;

  constructor(private srv: ContatoService) { }

  ngOnInit() {

  }
  public verificar() {
    this.msgNome = this.verificaNome(this.nome);
    this.msgSobreNome = this.verificaNome(this.sobrenome);
    this.msgTel = this.verificaTelenone(this.telefone);
    this.msgTipoContato = this.verificaTipoContato();
    this.msgAssunto = this.verificaAssunto();
    this.msgEmail = this.verificaEmail();
    this.msgMensagem = this.verificaMensagem();

    if (this.msgNome        == "" &&
        this.msgSobreNome   == "" &&
        this.msgTel         == "" &&
        this.msgTipoContato == "" &&
        this.msgAssunto     == "" &&
        this.msgEmail       == "" &&
        this.msgMensagem    == "") 
      {
        this.enviaremail();
      alert("Sua mensagem foi enviada com sucesso !!!")
      this.nome        = "";
      this.sobrenome   = "";
      this.email       = "";
      this.telefone    = "";
      this.tipoContato = "";
      this.assunto     = "";
      this.mensagem    = "";
    } else {
      alert("Por favor, preencha os campos destacados")
      this.verificanumero();
    }
  }

  public enviaremail(){
    console.log("chamou enviar mail");
    
    this.contato.assunto = this.assunto;
    this.contato.email = this.email;
    this.contato.mensagem = this.mensagem;
    this.contato.nome = this.nome;
    this.contato.sobrenome = this.sobrenome;
    this.contato.telefone =  this.telefone;
    this.contato.tipoContato = this.tipoContato;
    console.log(this.contato);

    this.srv.enviarEmail(this.contato).subscribe(res => {
      alert("email enviado com sucesso");
    },
    err=> {
      alert("erro ao enviar email");
    })
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

  public verificaTelenone(tel: string): string {
    console.log("verificaTelenone: " + tel);
    if (tel != null) {
      if (tel.length < 14) {
        return "complete o número";
      } else {
        for (var i = 0; i < this.telefone.length; i++) {
        }
      }
    } else {
      return "digite seu número";
    }
    return "";
  }

  public verificaTipoContato(): string {
    if (this.tipoContato == null || this.tipoContato == "") {
      return "escolha uma das opções";
    }
    return "";
  }

  public verificaAssunto(): string {
    if (this.assunto == null || this.assunto == "") {
      return "Digite o assunto do contato";
    }
    return "";
  }

  public verificaEmail() {
    if (this.email != null) {
      if (this.email.indexOf("@") == -1) {
        return "Digite um email válido";
      }
    } else {
      return "Digite seu email";
    }
    return "";
  }

  public verificaMensagem(): string {
    if (this.mensagem != null) {
      if (this.mensagem.length <= 20) {
        return "Digite pelo menos 20 caracteres";
      }
    } else {
      return "Digite pelo menos 20 caracteres";
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
}