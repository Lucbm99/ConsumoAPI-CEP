import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private baseURL: string = 'https://cep.awesomeapi.com.br/';

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public searchCEP(): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}json/13904018`)
      .pipe(
        map((data: any) => 
          data.data
    ))
  }
}
