import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GetAllEmpeladosUseCase } from 'src/domain/usecases/empleado/get-empleado.usecase';
import * as EmpleadoActions from '../actions/empleados.actions';

@Injectable()
export class EmpleadoEffects {
  getAllEmpleados$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpleadoActions.getEmpleados),
      mergeMap(() =>
        this.getAllEmpleadosUseCase.execute(null).pipe(
          map((empleados) =>
            EmpleadoActions.getEmpleadosSuccess({ empleados: [...empleados] })
          ),
          catchError(() => of(EmpleadoActions.getEmpleadosError))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getAllEmpleadosUseCase: GetAllEmpeladosUseCase
  ) {}
}
