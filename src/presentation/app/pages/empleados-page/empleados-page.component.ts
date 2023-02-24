import { Component, Inject } from '@angular/core';
import { GetAllEmpeladosUseCase } from 'src/domain/usecases/empleado/get-empleado.usecase';
import { GetOneEmpleadoUseCase } from 'src/domain/usecases/empleado/get-one-empleado.usecase';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmpleadoFormularioComponent } from './components/celules/empleado-formulario/empleado-formulario.component';
import { Empleado } from 'src/domain/models/empleado.model';
import { CreateEmpleadoUseCase } from 'src/domain/usecases/empleado/create-empelado.usecase';
import { UpdateEmpleadoUseCase } from 'src/domain/usecases/empleado/udpate-empleado.usecase';

@Component({
  selector: 'app-empleados-page',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss'],
})
export class EmpleadosPageComponent {
  empleados: Empleado[] = [];
  constructor(
    public dialog: MatDialog,
    private getAllEmpleadosUseCase: GetAllEmpeladosUseCase,
    private getOneEmpleadoUseCase: GetOneEmpleadoUseCase,
    private updateEmpleadoUseCase: UpdateEmpleadoUseCase,
    private addEmpleadoUseCase: CreateEmpleadoUseCase
  ) {
    this.obtenerAllEmpleados();
  }

  verDetalle(id: number) {
    this.getOneEmpleadoUseCase.execute(id).subscribe((resp) => {
      console.log(resp);
      this.openDialog(resp);
    });
  }

  obtenerAllEmpleados() {
    this.getAllEmpleadosUseCase.execute(null).subscribe((resp) => {
      this.empleados = resp;
    });
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
}
