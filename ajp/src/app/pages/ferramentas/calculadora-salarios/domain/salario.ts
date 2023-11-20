export class Salario {
    private _salarioAnual: number = 0;
    private _valorAtualMoeda: number = 0;

    constructor(salarioAnual: number, valorAtualMoeda: number) {
        this._salarioAnual = salarioAnual;
        this._valorAtualMoeda = valorAtualMoeda;
    }

    get salarioAnual(): number {
        return this._salarioAnual;
    }

    get valorAtualMoeda(): number {
        return this._valorAtualMoeda;
    }

    totalPorMes(): number {
        return this.salarioAnual / 12;
    }

    totalPorMesConvertido(): number {
        return (this.salarioAnual / 12) * this.valorAtualMoeda;
    }

    totalAnualConvertido(): number {
        return this.salarioAnual * this.valorAtualMoeda;
    }
}


export type SalarioRetorno = {
    totalPorMes: number;
    totalPorMesConvertido: number;
    totalAnualConvertido: number;
}