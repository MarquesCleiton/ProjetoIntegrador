import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  produto: Produto[];

  cliente: Cliente = new Cliente;



  constructor(private srv: ProdutoService, private rota: ActivatedRoute, private route: Router,
    private validar: UsuarioService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.validar.buscarInfo(localStorage.getItem("MyToken")).subscribe((res: Cliente) => {
      this.cliente = res;
      if (this.cliente.email != "feiraoonlinecontato@gmail.com") {
        this.route.navigate(['/home']);
      }
    },
      (err) => {
      })

    this.srv.exibirTodosProdutos().subscribe((res: Produto[]) => {
      this.produto = res;
    }),
      (err => {
        alert("deu errado")
      });
  }
  p1: Produto;
  teste: boolean;

  public apagar(id: number) {
    this.srv.apagar(id).subscribe((res) => {
      alert("apagado com sucesso");
      this.route.navigate(['/produtos']);
    },
      (err) => {
        alert("sem sucesso no delete")
      })
  }

}
