import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraSalariosComponent } from './calculadora-salarios.component';

describe('CalculadoraSalariosComponent', () => {
  let component: CalculadoraSalariosComponent;
  let fixture: ComponentFixture<CalculadoraSalariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraSalariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraSalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
