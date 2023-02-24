import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms"

export class EmpleadoForm{
    id: (number | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    foto: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    nombreCompleto: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    puestoDeTrabajo: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    salario: (number | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    estatus: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    fechaDeContratacion: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[]
    beneficiario: FormGroup;
}

export class beneficiarioForm {
    id: (number | ((control: AbstractControl<any, any>) => ValidationErrors | null))[];
    nombreCompleto: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[];
    parentesco: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[];
    fechaDeNacimiento: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[];
    sexo: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[];
}