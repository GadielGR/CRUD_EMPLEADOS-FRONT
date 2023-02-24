import { Beneficiario } from "./beneficiario.model";

export class Empleado {
  id: number;
  foto: string;
  nombreCompleto: string;
  puestoDeTrabajo: string;
  salario: number;
  estatus: string;
  fechaDeContratacion: string;
  beneficiario: Beneficiario;
}
