import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LogoSVG } from 'src/app/resources/logo';

@Component({
  selector: 'app-calculadora-salarios',
  templateUrl: './calculadora-salarios.component.html',
  styleUrls: ['./calculadora-salarios.component.scss']
})
export class CalculadoraSalariosComponent implements OnInit {
  logo: any;
  resultado: SafeHtml = '';
  salarioAnual: number | null = null;
  valorMoeda: number | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.logo = new LogoSVG(this.sanitizer).loadLogo();
  }

  ngOnInit(): void {
  }

  private formatCurrency(value: number, currency?: string): string {
    let optionsCurrency = {
      style: 'currency',
      currency: 'BRL'
    };

    if (currency) {
      optionsCurrency = {
        style: 'currency',
        currency: currency
      };
    }

    return value.toLocaleString('pt-BR', optionsCurrency);
  }

  calculaSalario() {
    if (typeof this.salarioAnual === 'number' && typeof this.valorMoeda === 'number') {
      const res = {
        totalMes: this.salarioAnual / 12,
        totalMesConvertido: (this.salarioAnual / 12) * this.valorMoeda,
        totalAnualConvertido: this.salarioAnual * this.valorMoeda
      };

      const resHtml = `Salário Mensal é: <b>${this.formatCurrency(res['totalMes'], 'USD')}</b> <br/>
      Salário Mensal Convertido é: <b>${this.formatCurrency(res['totalMesConvertido'])}</b> <br/>
      Salário Anual Convertido é: <b>${this.formatCurrency(res['totalAnualConvertido'])}</b>`;

      this.resultado = this.sanitizer.bypassSecurityTrustHtml(resHtml);
    }
  }

}
