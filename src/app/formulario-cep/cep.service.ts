import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private baseURL: string = 'https://cep.awesomeapi.com.br/';

  constructor(private _httpClient: HttpClient) {}

  public searchCEP(cep: string): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}json/${cep}`)
      .pipe(
        map((data: any) => 
        data
      ),
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        return EMPTY;
      })
    );
  }
}
