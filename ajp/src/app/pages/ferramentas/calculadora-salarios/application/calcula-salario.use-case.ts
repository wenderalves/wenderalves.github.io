import { Salario, SalarioRetorno } from "../domain/salario";

export class CalculaSalarioUseCase {

    private salario: Salario;

    constructor(salarioAnual: number, valorAtualMoeda: number) {
        this.salario = new Salario(salarioAnual, valorAtualMoeda);
    }

    calculaSalario(): SalarioRetorno {
        if (typeof this.salario.salarioAnual !== 'number' && typeof this.salario.valorAtualMoeda !== 'number') return;        
        return {
            totalPorMes: this.salario.totalPorMes(),
            totalPorMesConvertido: this.salario.totalPorMesConvertido(),
            totalAnualConvertido: this.salario.totalAnualConvertido()
        }
    }
}