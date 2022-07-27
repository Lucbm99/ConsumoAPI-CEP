import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private baseURL: string = 'https://cep.awesomeapi.com.br/';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 3;

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar,
  ) {}

  public searchCEP(cep: string): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}json/${cep}`)
      .pipe(
        map((data: any) => 
        data
      ),
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        if(error.status === 400) {
          this.openSnackBar400();
        } else if(error.status === 404) {
          this.openSnackBar404();
        }
        return EMPTY; 
      })
    );
  }

  
  public openSnackBar400() {
    this._snackBar.open('CEP inválido. Verifique e tente novamente.', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

  public openSnackBar404() {
    this._snackBar.open('CEP não encontrado. Verifique e tente novamente.', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }
}
