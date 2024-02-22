import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraPerfilComponent } from './calculadora-perfil.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { GraficoComponent } from './components/grafico/grafico.component';

export const routes: Routes = [
  {
    path: '',
    component: CalculadoraPerfilComponent
  }
];

@NgModule({
  declarations: [
    CalculadoraPerfilComponent,
    PerguntasComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ ]
})
export class CalculadoraPerfilModule { }
