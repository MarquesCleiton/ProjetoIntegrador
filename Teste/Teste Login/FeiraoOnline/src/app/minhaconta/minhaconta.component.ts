import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {
  private nome: string;
  private sobrenome: string;
  private telefone: string;
  private email: string;
  private confirmaSenha: string;
  private endereco: string;
  private cidade: string;
  private cep:string;
  private estado: string;
  private cliente:Cliente = new Cliente();
  constructor(private srv: UsuarioService) { }

  ngOnInit() {
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
      this.sobrenome = this.cliente.nome;
      this.email = this.cliente.email;
      this.telefone = this.cliente.telefone;
      this.endereco = this.cliente.endereco;
      this.estado = this.cliente.estado;
      this.cidade = this.cliente.cidade;
      this.cep = this.cliente.cep;
    });
  }
}
