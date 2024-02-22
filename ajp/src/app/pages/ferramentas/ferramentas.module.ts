import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: 'calculadora-salarios',
        loadChildren: () => import("./calculadora-salarios/calculadora-salarios.module").then(m => m.CalculadoraSalariosModule)
    },
    {
        path: 'perfil-comportamental',
        loadChildren: () => import("./calculadora-perfil/calculadora-perfil.module").then(m => m.CalculadoraPerfilModule)
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class FerramentasModule { }
