import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CalculadoraSalariosComponent } from "./presentation/calculadora-salarios.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiDolarService } from "./services/api-dolar.service";

export const routes: Routes = [
    {
        path: '',
        component: CalculadoraSalariosComponent
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [CalculadoraSalariosComponent],
    providers: [ApiDolarService],
})
export class CalculadoraSalariosModule { }