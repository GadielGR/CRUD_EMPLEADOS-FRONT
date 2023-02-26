import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { EmpleadosState } from "../reducers/empleados.reducer";

export const selectEmpleado = (state: AppState) => state.empleados;
 