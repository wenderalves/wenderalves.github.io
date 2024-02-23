import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  @Input() perguntas: any = [];
  @Output() resultado: EventEmitter<any> = new EventEmitter<any>();

  perfilForm = this.formBuilder.group({});
  perguntaAtual = 1;
  disabledProximo$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.perguntas.forEach((el: any) => {
      this.perfilForm.addControl(`pergunta-${el?.numero}`, new FormControl('', Validators.required));
    });

    this.perfilForm.valueChanges.subscribe((val: any) => {
      this.disabledProximo$.next(val['pergunta-' + this.perguntaAtual] === '');
    });
  }

  calcularResultado() {
    if (this.perfilForm.value) {
      let resultado: any = { 'I':0, 'C':0, 'A':0, 'O':0 };
      Object.values(this.perfilForm.value).forEach((el: any) => {
        resultado[el]++;
      });

      this.resultado.emit({
        contagem: resultado,
        percentual: {
          'I': resultado['I'] * 4,
          'C': resultado['C'] * 4,
          'A': resultado['A'] * 4,
          'O': resultado['O'] * 4
        }
      });

      console.log(`
        I ${resultado['I'] } X4 ${resultado['I'] * 4}% Águia
        C ${resultado['C'] } X4 ${resultado['C'] * 4}% Gato
        A ${resultado['A'] } X4 ${resultado['A'] * 4}% Tubarão
        O ${resultado['O'] } X4 ${resultado['O'] * 4}% Lobo
      `);
    }
  }

  voltar() {
    this.perguntaAtual--;
  }

  avancar() {
    this.disabledProximo$.next(true);
    this.perguntaAtual++;
  }
}
