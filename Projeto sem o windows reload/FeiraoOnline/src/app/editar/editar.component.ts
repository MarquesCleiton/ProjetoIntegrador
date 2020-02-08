import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
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

   cliente: Cliente = new Cliente;

   TesteSenha: boolean;

   msgNome: string;
   msgTelefone: string;
   msgEmail: string;
   msgSenha: string;
   msgConfirmaSenha: string;
   msgEndereco: string;
   msgCidade: string;
   msgCep: string;
   msgEstado: string;
   id:number;
  public user:Cliente = new Cliente();

  constructor(private rota:ActivatedRoute, private srv: UsuarioService, private validar: UsuarioService,private route: Router) { 
  }

  ngOnInit() {
    window.scroll(0,0);
    this.validar.buscarInfo(localStorage.getItem("MyToken")).subscribe((res: Cliente) => {
      this.cliente = res;
      if(this.cliente.email != "feiraoonlinecontato@gmail.com"){
      this.route.navigate(['/home']);
      }
    },
    (err) => {
    })
    this.id = this.rota.snapshot.params["id"];
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

    this.msgNome = this.verificaNome(this.nome);
    this.msgEmail = this.verificaEmail();
    this.msgTelefone = this.verificaTelefone(this.telefone);
    this.msgSenha = this.verificaSenha(this.senha);
    this.msgCidade = this.verificaNome(this.cidade);
    this.msgEstado = this.verificaEstado();
    this.msgEndereco = this.verificaEndereco();
    this.msgCep = this.verificaCep();
    this.verificaConfirmaSenha();


    if (this.msgNome          == "" &&
        this.msgEmail         == "" &&
        this.msgTelefone      == "" &&
        (this.msgSenha        == "Senha Forte" || this.msgSenha == "Senha Fraca") &&
        this.msgConfirmaSenha == "" &&
        this.msgCidade        == "" &&        
        this.msgEstado        == "" &&
        this.msgEndereco      == "" &&
        this.msgCep           == "" ) {

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
          this.msgNome          = "";
          this.msgEmail         = "";
          this.msgTelefone      = "";          
          this.msgSenha         = "";
          this.msgConfirmaSenha = "";
          this.msgCidade        = "";
          this.msgEstado        = "";
          this.msgEndereco      = "";
          this.msgCep           = "";

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

  public verificaNome(nome: string): string {
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

  public verificaCep():string{
    if (this.cep != null || this.cep != "") {
      if (this.cep.length < 9) {
        return "Complete o número";
      }
    } else {
      return "Digite o CEP";
    }
    return "";
  }

  public formataCep(){
    if(this.cep != null){
      if (this.cep.length == 5) {
        this.cep += "-"
      }
    }
      this.verificanumeroCep();
  }

  public verificanumeroCep() {
    if (this.cep != null) {
      var uc: string = this.cep.charAt(this.cep.length - 1);
      if (this.cep.length != 6) {
        if (uc != "0" && uc != "1" && uc != "2" && uc != "3" && uc != "4"
          && uc != "5" && uc != "6" && uc != "7" && uc != "8" && uc != "9") {
          this.cep = this.cep.substring(0, this.cep.length - 1);
        }
      }
    }
  }

  public formataTelefone(event) {
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
    if (this.telefone != null) {
      var uc: string = this.telefone.charAt(this.telefone.length - 1);
      if (this.telefone.length != 1 && this.telefone != "(") {
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

  public verificaEstado():string{
    if(this.estado == null ||this.estado == ""){
      return "Escolha uma das opções"
    }
    return ""
  }

  public verificaEndereco():string{
    if(this.endereco == "" || this.endereco == null){
      return "Digite o seu endereço"
    }
    return ""
  }
}
