import { CepService } from './cep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cep',
  templateUrl: './formulario-cep.component.html',
  styleUrls: ['./formulario-cep.component.scss']
})
export class FormularioCepComponent implements OnInit {
  public cepForm: FormGroup;
  dataCEP: any;
  address: string; 
  district: string; 
  state: string; 
  city: string; 

  constructor(
    private _cepService: CepService,
    private _formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
    
    //formulário para usuarios
    this.cepForm = this._formBuilder.group({
      valorCEP: ['', [Validators.required]],
      address: [''],
      district: [''],
      city: [''],
      state: [''],
    });
    
  }

  searchCep() {
    this._cepService.searchCEP(this.cepForm.value.valorCEP).subscribe((response) => {
      this.dataCEP = response;

      this.address = response.address; 
      this.district = response.district;
      this.state = response.state;
      this.city = response.city;
    });  
  }
}
