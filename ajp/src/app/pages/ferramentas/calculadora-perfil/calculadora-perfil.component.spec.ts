import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPerfilComponent } from './calculadora-perfil.component';

describe('CalculadoraPerfilComponent', () => {
  let component: CalculadoraPerfilComponent;
  let fixture: ComponentFixture<CalculadoraPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
