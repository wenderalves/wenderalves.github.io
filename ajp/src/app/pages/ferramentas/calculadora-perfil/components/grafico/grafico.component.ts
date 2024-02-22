import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  @Input() resultados: any = {
    contagem: { 'I':2, 'C':4, 'A':9, 'O':10 },
    percentual: {
      'I': 12,
      'C': 25,
      'A': 55,
      'O': 28
    }
  };

  configGraf = {
    percentageWhite: 54,
    iconWhite: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
