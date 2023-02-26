import { createAction, props } from '@ngrx/store';
import { Empleado } from 'src/domain/models/empleado.model';
import { Observable } from 'rxjs';

export const getEmpleados = createAction('[Empleados Page] Get Empleados');
export const getEmpleadosSuccess = createAction(
  '[Empleados Page] Get Empleados Success',
  props<{ empleados: Array<Empleado> }>()
);
export const getEmpleadosError = createAction(
  '[Empleados Page] Get Empleados Error'
);
export const setEmpleados = createAction(
  '[Empleados Page] Set Empleados',
  props<{ empleados: Array<Empleado> }>()
);

export const addEmpleadosSuccess = createAction(
  '[Empleados Page] Add Empleados Success'
);
export const addEmpleadosError = createAction(
  '[Empleados Page] Add Empleados Error'
);
