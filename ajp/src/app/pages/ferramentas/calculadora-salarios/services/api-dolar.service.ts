import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiDolarService {
    url:string = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
    constructor(private http: HttpClient) {}

    getValorAtualDolar() {
        return this.http.get(this.url);
    }
}