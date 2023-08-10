import { NgModule } from '@angular/core';
import { CalculadoraSalariosComponent } from './calculadora-salarios/calculadora-salarios.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: 'calculadora-salarios',
        component: CalculadoraSalariosComponent
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [CalculadoraSalariosComponent],
    providers: [],
})
export class CalculadoraSalariosModule { }
