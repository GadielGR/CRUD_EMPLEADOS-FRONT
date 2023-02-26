import { createReducer, on } from '@ngrx/store';
import * as EmpleadoPageActions from '../actions/empleados.actions';
import { Empleado } from 'src/domain/models/empleado.model';

export interface EmpleadosState {
  empleados: Array<Empleado>;
  loading: boolean;
}
export const initialEmpleadosState: EmpleadosState = {
  empleados: [],
  loading: true,
};

export const empleadosReducer = createReducer(
  initialEmpleadosState,
  on(EmpleadoPageActions.setEmpleados, (state) => ({
    ...state,
    empleados: state.empleados,
  })),
  on(EmpleadoPageActions.getEmpleadosSuccess, (state, { empleados }) => ({
    ...state,
    empleados,
    loading: false,
  })),
  on(EmpleadoPageActions.getEmpleadosError, (state) => ({
    ...state,
    loading: false,
  }))
);
