import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LogoSVG } from 'src/app/resources/logo';
import { CalculaSalarioUseCase } from '../application/calcula-salario.use-case';
import { ApiDolarService } from '../services/api-dolar.service';

@Component({
  selector: 'app-calculadora-salarios',
  templateUrl: './calculadora-salarios.component.html',
  styleUrls: ['./calculadora-salarios.component.scss']
})
export class CalculadoraSalariosComponent implements OnInit {
  logo: any;
  resultado: SafeHtml = '';
  salarioAnual: number = 0;
  valorMoeda: number = 0;

  constructor(private sanitizer: DomSanitizer, private serviceDolar: ApiDolarService) {
    this.logo = new LogoSVG(this.sanitizer).loadLogo();
  }

  ngOnInit(): void {
    // TODO: esta forma ainda está errada criar um adapter para abstrair a parte de httpClient
    this.serviceDolar.getValorAtualDolar().subscribe((res:any) => {
      if (res['USDBRL']) {
        this.valorMoeda = +res['USDBRL'].bid;
      }
    });
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
