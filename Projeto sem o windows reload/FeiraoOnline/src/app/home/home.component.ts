import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idFruta:   number;
  idVerdura: number;
  idLegume:  number; 
  idProduto: number;

  produtos:Array<Produto>;
  listaProduto: Array<Produto>;
  princProdutos: Array<Produto>;

  constructor(private srv: ProdutoService) { }

  ngOnInit() {
    window.scroll(0,0);

    this.srv.buscaReversa().subscribe((res: Produto[]) => {

      var i:number;
      this.listaProduto = new Array();
      this.princProdutos = new Array();
      this.produtos = new Array();
      this.produtos = res;

      for(i = 0; i < 5; i ++){
        this.listaProduto[i] = new Produto();
        this.princProdutos[i] = new Produto();
        if(res[i] != null){
          this.listaProduto[i] = res[i];
        }
      }

      console.log(this.listaProduto);
      this.aleatorio();
      console.log(this.princProdutos);
    }, 
    err =>{

    })
    this.idFruta = 1;
    this.idVerdura = 2;
    this.idLegume = 3;
  }

  aleatorio(){

    var max:number = this.produtos.length - 1;
    var p1:number = Math.floor((Math.random() * (max)) + 0);
    var p2:number;
    var p3:number;
    var p4:number;
    var p5:number;

    console.log("Tamanho: "+ max);
    console.log("1: "+p1);
    
    do{
      p2 = Math.floor((Math.random() * (max)) + 0);
      console.log("2: "+p2);
    }while(p2 == p1);

    var p3:number;

    do{
      p3 = Math.floor((Math.random() * (max)) + 0);
      console.log("3: "+p3);
    }while(p3 == p2 || p3 == p1);

    var p4:number;

    do{
      p4 = Math.floor((Math.random() * (max)) + 0);
      console.log("4: "+p4);
    }while(p4 == p3 || p4 == p2 || p4 == p1);

    var p5:number;

    do{
      p5 = Math.floor((Math.random() * (max)) + 0);
      console.log("5: "+p5);
    }while(p5 == p4 || p5 == p3 || p5 == p2 || p5 == p1);

    this.princProdutos[0] = new Produto();
    this.princProdutos[1] = new Produto();
    this.princProdutos[2] = new Produto();
    this.princProdutos[3] = new Produto();
    this.princProdutos[4] = new Produto();

    this.princProdutos[0] = this.produtos[p1];
    this.princProdutos[1] = this.produtos[p2];
    this.princProdutos[2] = this.produtos[p3];
    this.princProdutos[3] = this.produtos[p4];
    this.princProdutos[4] = this.produtos[p5];
  }
}
