// import { Inject } from "@angular/core";
// import { HttpClient } from "./http-client.base";
// import { HttpClient as HttpClientAngular, HttpClientModule } from '@angular/common/http';
// import { Observable } from "rxjs";

import { HttpInterceptor } from "@angular/common/http";
import { InjectionToken } from "@angular/core";

// export class HttpClientAdapter implements HttpClient {
//     _http!: HttpClient;
//     _url: string = '';

//     constructor(@Inject(HttpClientAngular) _http: HttpClientAngular, private url: string) {
//         if (_http) this._http = _http;
//     }

//     post(url: string, options?: any): void {
//         throw new Error("Method not implemented.");
//     }

//     put(url: string, options?: any): void {
//         throw new Error("Method not implemented.");
//     }

//     delete(url: string, options?: any): void {
//         throw new Error("Method not implemented.");
//     }

//     get(): Observable<any> {
//         return this._http.get(this.url);
//     }
// }


declare module '@angular/common/http/src/client' {
    export interface HttpClient {
        hideLoader(hide?: boolean): HttpClient;
    }
}

export const HTTP_CLIENT = new InjectionToken<HttpInterceptor>('HTTP_CLIENT');