import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Empleado } from 'src/domain/models/empleado.model';
import { EmpleadoForm, beneficiarioForm } from '../../../empleado-form';

@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.scss'],
})
export class EmpleadoFormularioComponent {
  @Input() message: string = '';
  @Output() guardarEmpleado = new EventEmitter();
  @Output() cancelarCreacionEmpleado = new EventEmitter();

  beneficiarioForm = this._formBuilder.group<beneficiarioForm>({
    id: [0, Validators.required],
    nombreCompleto: ['', Validators.required],
    parentesco: ['', Validators.required],
    fechaDeNacimiento: ['', Validators.required],
    sexo: ['', Validators.required],
  });
  empleadoForm = this._formBuilder.group<EmpleadoForm>({
    id: [0],
    foto: [''],
    nombreCompleto: ['', Validators.required],
    puestoDeTrabajo: ['', Validators.required],
    salario: [0, Validators.required],
    fechaDeContratacion: ['', Validators.required],
    beneficiario: this.beneficiarioForm,
    estatus: [''],
  });
  isLinear = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public empleado: Empleado,
    private dialogRef: MatDialogRef<EmpleadoFormularioComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.empleado?.id) {
      this.setFormulario();
    }
  }

  setFormulario() {
    this.setFormularioEmpleado();
    this.setFormularioBeneficiario();
  }

  setFormularioEmpleado() {
    this.empleadoForm.controls.id.setValue(this.empleado.id);
    this.empleadoForm.controls.nombreCompleto.setValue(
      this.empleado.nombreCompleto
    );
    this.empleadoForm.controls.puestoDeTrabajo.setValue(
      this.empleado.puestoDeTrabajo
    );
    this.empleadoForm.controls.estatus.setValue(this.empleado.estatus);
    this.empleadoForm.controls.fechaDeContratacion.setValue(
      this.empleado.fechaDeContratacion
    );
    this.empleadoForm.controls.foto.setValue(this.empleado.foto);
    this.empleadoForm.controls.salario.setValue(this.empleado.salario);
  }
  setFormularioBeneficiario() {
    const beneficiario = this.empleado.beneficiario;
    this.beneficiarioForm.controls.id.setValue(beneficiario.id);
    this.beneficiarioForm.controls.nombreCompleto.setValue(
      beneficiario.nombreCompleto
    );
    this.beneficiarioForm.controls.fechaDeNacimiento.setValue(
      beneficiario.fechaDeNacimiento
    );
    this.beneficiarioForm.controls.parentesco.setValue(beneficiario.parentesco);
    this.beneficiarioForm.controls.sexo.setValue(beneficiario.sexo);
  }

  cancelar(stepper: any): void {
    stepper.reset();
    this.cancelarCreacionEmpleado.emit();
    this.dialogRef.close(null);
  }

  guardarEmpelado() {
    this.empleadoForm.controls.beneficiario.setValue(
      this.beneficiarioForm.value
    );
    this.dialogRef.close(this.empleadoForm.value as Empleado);
  }
}
