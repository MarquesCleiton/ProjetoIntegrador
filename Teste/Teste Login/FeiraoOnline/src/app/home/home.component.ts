import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idFruta:   number;
  idVerdura: number;
  idLegume:  number;

  constructor() { }


  ngOnInit() {
<<<<<<< HEAD
    this.idFruta = 1;
    this.idVerdura = 2;
    this.idLegume = 3;
=======
    window.scroll(0,0);
>>>>>>> 3f783056cce3165374ab90d9f191784d2371af0e
  }

}
