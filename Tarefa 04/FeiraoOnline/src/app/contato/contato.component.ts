import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  private nome: string;
  private sobrenome: string;
  private email: string;
  private telefone: string;
  private tipoContato: string;
  private assunto: string;
  private mensagem: string;

  private msgNome: string;
  private msgSobreNome: string;
  private msgTel: string;
  private msgTipoContato: string;
  private msgEmail: string;
  private msgAssunto: string;
  private msgMensagem: String;

  constructor() { }

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

    if (this.msgNome == "" &&
      this.msgSobreNome == "" &&
      this.msgTel == "" &&
      this.msgTipoContato == "" &&
      this.msgAssunto == "" &&
      this.msgEmail == "" &&
      this.msgMensagem == "") {
      alert("Sua mensagem foi enviada com sucesso !!!")
      this.nome = ""
      this.sobrenome= ""
      this.email = ""
      this.telefone = ""
      this.tipoContato = ""
      this.assunto = ""
      this.mensagem = ""
} else {
  alert("Por favor, preencha os campos destacados")
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
      return "digite pelo menos 3 letras";
    }
  } else {
    return "Não pode ser vázio";
  }
}

  public verificaTelenone(tel: string): string {
  var filtro: any = /[(0-9)]/;
  console.log(tel)
  if (tel != null) {
    if (tel.length == 11) {
      if (tel.indexOf(" ") != -1) {
        return "não coloque espaços entre os números";
      } else {
        if (!filtro.test(tel)) {
          return "digite apenas números";
        }
      }
    } else {
      return "complete o número";
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
    return "Digite algo";
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
}

