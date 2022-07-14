import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCepComponent } from './formulario-cep.component';

describe('FormularioCepComponent', () => {
  let component: FormularioCepComponent;
  let fixture: ComponentFixture<FormularioCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
