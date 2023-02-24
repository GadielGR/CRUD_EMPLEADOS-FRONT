import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosOptionsComponent } from './empleados-options.component';

describe('EmpleadosOptionsComponent', () => {
  let component: EmpleadosOptionsComponent;
  let fixture: ComponentFixture<EmpleadosOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
