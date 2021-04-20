import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {
  title = 'WEB CONTADOR';
  numero = 10;
  base = 5;

  constructor() { }
  ngOnInit(): void {
  }

  acumular(valor: number){
    this.numero += valor;
  }
  desacumular(valor: number){
    this.numero -= valor;
  }

}