import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LogoSVG } from 'src/app/resources/logo';
import { CalculaSalarioUseCase } from '../application/calcula-salario.use-case';

@Component({
  selector: 'app-calculadora-salarios',
  templateUrl: './calculadora-salarios.component.html',
  styleUrls: ['./calculadora-salarios.component.scss']
})
export class CalculadoraSalariosComponent {
  logo: any;
  resultado: SafeHtml = '';
  salarioAnual: number | null = null;
  valorMoeda: number | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.logo = new LogoSVG(this.sanitizer).loadLogo();
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
    const salario = new CalculaSalarioUseCase(this.salarioAnual, this.valorMoeda);
    const resSalario = salario.calculaSalario();
    
    if (resSalario) {
      const resHtml = `Salário Mensal é: <b>${this.formatCurrency(resSalario['totalPorMes'], 'USD')}</b> <br/>
      Salário Mensal Convertido é: <b>${this.formatCurrency(resSalario['totalPorMesConvertido'])}</b> <br/>
      Salário Anual Convertido é: <b>${this.formatCurrency(resSalario['totalAnualConvertido'])}</b>`;

      this.resultado = this.sanitizer.bypassSecurityTrustHtml(resHtml);
    }
  }

}
