import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements AfterViewInit {

  @ViewChild('grafico') grafico!: ElementRef<SVGElement>;

  @Input() resultados: any = {
    contagem: { 'I':2, 'C':4, 'A':9, 'O':10 },
    percentual: {
      'I': 30,
      'C': 30,
      'A': 30,
      'O': 10
    }
  };

  configGraf = {
    percentageWhite: 54,
    iconWhite: 10
  }

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.criaLinhasGrafico();
  }

  calculaPorcentagemBarra(ref1: string, ref2: string, meio: number): number {
    let valor1: number = this.resultados.percentual[ref1];
    let valor2: number = this.resultados.percentual[ref2];

    if (valor1 && valor2) {
      const percentualTamanho = ((valor1 + valor2)/100) * meio;
      return Math.floor(percentualTamanho * 2);
    }

    return meio;
  }

  criaLinhasGrafico() {
    const meioLargura = 422;
    const meioAltura = 410;

    const grafRes = [
      `${meioAltura},${this.calculaPorcentagemBarra('C','I', meioAltura)}`,
      `${this.calculaPorcentagemBarra('C','A', meioLargura)},${meioLargura}`,
      `${meioAltura},${this.calculaPorcentagemBarra('A','O', meioAltura)}`,
      `${this.calculaPorcentagemBarra('I','O', meioLargura)},${meioLargura}`
    ].join(' ');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', grafRes);
    polygon.setAttribute('stroke', '#7660E6');
    polygon.setAttribute('stroke-width', '6');
    this.renderer.insertBefore(this.grafico.nativeElement, polygon, this.grafico.nativeElement.firstChild);
    this.cdRef.detectChanges();
  }
}
