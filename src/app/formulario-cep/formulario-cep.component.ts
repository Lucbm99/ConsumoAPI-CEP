import { CepService } from './cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-cep',
  templateUrl: './formulario-cep.component.html',
  styleUrls: ['./formulario-cep.component.scss']
})
export class FormularioCepComponent implements OnInit {
  
  dataCEP: any;

  constructor(
    private _cepService: CepService
  ) { }


  ngOnInit(): void {
    this._cepService.searchCEP().subscribe((response) => {
      this.dataCEP = response;
      console.log(this.dataCEP)
    })
  }

  searchCep() {

  }
}
