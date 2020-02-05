import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Globals } from '../model/Global';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Cliente } from '../model/Cliente';


@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
  providers: [ Globals ]
})
export class CadastroProdutosComponent implements OnInit {

   titulo:    string;
   descricao: string;
   preco:     number;
   linkFoto:  string;
   produto: Produto = new Produto();
   categoria_id_categoria: string;
   aux: string;
   cliente: Cliente = new Cliente;
   

  


  constructor(private srv: ProdutoService,private validar:UsuarioService,private rota:ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.validar.buscarInfo(localStorage.getItem("MyToken")).subscribe((res: Cliente) => {
      this.cliente = res;
      if(this.cliente.email != "feiraoonlinecontato@gmail.com"){
      this.route.navigate(['/home']);
      }
    },
    (err) => {
    })
    console.log(this.cliente);
    
  }
  

  public enviarProduto(){
    
    if(this.categoria_id_categoria == "Fruta"){
      this.produto.categoria.idCategoria = 1;
    }else if(this.categoria_id_categoria == "Verdura"){
      this.produto.categoria.idCategoria = 2;
    }else{
      this.produto.categoria.idCategoria = 3;
    }
    this.produto.idProduto = null;
    this.produto.titulo = this.titulo;
    this.produto.descricao = this.descricao;
    this.produto.linkFoto = this.linkFoto;
    this.produto.preco = this.preco;
    
    console.log(this.produto);
    this.srv.inseriProdutos(this.produto).subscribe(res =>{
      console.log(res);
      alert("Cadastro realizado com sucesso!!!");
          this.titulo = "";
          this.descricao = "";
          this.linkFoto = "";
          this.preco = null;
          this.categoria_id_categoria = "";
    },
    err => {
       alert("Erro ao realizar o cadastro");
    })

  }

 

}
