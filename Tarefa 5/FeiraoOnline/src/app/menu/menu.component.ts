import { Component, OnInit } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  barraPesquisa:string;

  constructor() { }

  ngOnInit() {
  }

  public botao(){
    console.log(this.barraPesquisa);
    var pgProduto:ProdutosComponent;
    pgProduto.setMsg(this.barraPesquisa);
  }

}
