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
  produto: Array<Produto>;
  listaProduto: Array<Produto>;

  constructor(private srv: ProdutoService) { }


  ngOnInit() {

    this.srv.buscaReversa().subscribe((res: Produto[]) => {
      this.produto = res;
      var i:number;
      this.listaProduto = new Array();
      this.produto = new Array();
      for(i = 0; i < 5; i ++){
        this.listaProduto[i] = new Produto();
        if(res[i] != null){
          this.listaProduto[i] = res[i];
        }else{

        }
      }
      console.log(this.produto);
      console.log(this.listaProduto);
    }, 
    err =>{

    })
    
    this.idFruta = 1;
    this.idVerdura = 2;
    this.idLegume = 3;
    window.scroll(0,0);
  }

}
