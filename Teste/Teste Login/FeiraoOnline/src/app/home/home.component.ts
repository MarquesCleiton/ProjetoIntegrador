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
    this.idFruta = 1;
    this.idVerdura = 2;
    this.idLegume = 3;
  }

}
