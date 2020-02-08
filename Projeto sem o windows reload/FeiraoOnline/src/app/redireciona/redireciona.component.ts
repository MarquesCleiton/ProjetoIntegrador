import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redireciona',
  templateUrl: './redireciona.component.html',
  styleUrls: ['./redireciona.component.css']
})
export class RedirecionaComponent implements OnInit {
  private pagina: string;
  constructor(private rota:Router, private actRota:ActivatedRoute) { }

  ngOnInit() {
   this.pagina = this.actRota.snapshot.params["pagina"];
   if(this.pagina == "carrinho"){
    this.rota.navigate(['/carrinho']);
   }else if(this.pagina == "listagemprodutos"){
    this.rota.navigate(['/listagemprodutos']);
   }else{
    this.rota.navigate(['/home']);
   }
  }

}
