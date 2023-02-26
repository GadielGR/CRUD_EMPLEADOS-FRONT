import { Component, Inject } from '@angular/core';
import { GetAllEmpeladosUseCase } from 'src/domain/usecases/empleado/get-empleado.usecase';
import { GetOneEmpleadoUseCase } from 'src/domain/usecases/empleado/get-one-empleado.usecase';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmpleadoFormularioComponent } from './components/celules/empleado-formulario/empleado-formulario.component';
import { Empleado } from 'src/domain/models/empleado.model';
import { CreateEmpleadoUseCase } from 'src/domain/usecases/empleado/create-empelado.usecase';
import { UpdateEmpleadoUseCase } from 'src/domain/usecases/empleado/udpate-empleado.usecase';
import { Store } from '@ngrx/store';
import { EmpleadosState } from '../../store/reducers/empleados.reducer';
import { getEmpleados } from '../../store/actions/empleados.actions';
import { selectEmpleado } from '../../store/selectors/empleado.selector';
import { AppState } from '../../store/store';
import { ConfirmMessageComponent } from '../../shared/celules/confirm-message/confirm-message.component';
import { DeleteEmpleadoUseCase } from 'src/domain/usecases/empleado/delete-empleado.usecase';
import { ModalService } from '../../shared/services/modal.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-empleados-page',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss'],
})
export class EmpleadosPageComponent {
  empleados: Empleado[] = [];
  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private modalService: ModalService,
    private getOneEmpleadoUseCase: GetOneEmpleadoUseCase,
    private updateEmpleadoUseCase: UpdateEmpleadoUseCase,
    private addEmpleadoUseCase: CreateEmpleadoUseCase,
    private deleteEmpleadoUseCase: DeleteEmpleadoUseCase
  ) {
    this.obtenerAllEmpleados();
    this.store.subscribe((state) => {
      this.empleados = state.empleados.empleados;
    });
  }

  verDetalle(id: number) {
    this.getOneEmpleadoUseCase.execute(id).subscribe((resp) => {
      console.log(resp);
      this.openDialog(resp);
    });
  }

  obtenerAllEmpleados() {
    this.store.dispatch(getEmpleados());
  }

  openDialog(empleado?: Empleado) {
    const dialogRef = this.dialog.open(EmpleadoFormularioComponent, {
      data: empleado,
    });

    dialogRef.afterClosed().subscribe((result: Empleado) => {
      if (result) {
        if (result.id) {
          this.updateEmpleadoUseCase.execute(result).subscribe((resp) => {
            console.log(resp);
            this.obtenerAllEmpleados();
          });
        } else {
          this.addEmpleadoUseCase.execute(result).subscribe((resp) => {
            console.log(resp);
            this.obtenerAllEmpleados();
          });
        }
      }
    });
  }

  deleteEmpleado(id: number) {
    this.modalService.showDialogConfirm(
      'Eliminar Empleado',
      '¿Esta seguro que desesa eliminar este empleado?',
      () => {
        this.deleteEmpleadoUseCase.execute(id).subscribe(
          (reps) => {
            this.showMensajeExito();
          },
          (err: HttpErrorResponse) => {
            if (err.status == 200) {
              this.showMensajeExito();
            } else {
              this.showMensajeError(err);
            }
          }
        );
      }
    );
  }

  showMensajeExito() {
    this.modalService.showModalMessage(
      'Empleado Eliminado',
      'El empleado se ha eliminado correctamente.'
    );
  }
  showMensajeError(err: HttpErrorResponse) {
    this.modalService.showModalMessage('Error Eliminado', err.message);
  }
}
