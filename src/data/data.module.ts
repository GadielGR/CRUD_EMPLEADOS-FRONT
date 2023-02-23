import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmpeladoRepository } from 'src/domain/repositories/empleado.repository';
import { EmpleadoImplementationRepository } from 'src/data/repositories/empleado/empleado-implementation.repository';
import {
  empleadoCreateUseCaseProvider,
  empleadoDeleteUseCaseProvider,
  empleadoGetAllUseCaseProvider,
  empleadoGetOneUseCaseProvider,
  empleadoUpdateUseCaseProvider,
} from './Empleado.providers';

@NgModule({
  providers: [
    empleadoGetAllUseCaseProvider,
    empleadoGetOneUseCaseProvider,
    empleadoCreateUseCaseProvider,
    empleadoUpdateUseCaseProvider,
    empleadoDeleteUseCaseProvider,
    {
      provide: EmpeladoRepository,
      useClass: EmpleadoImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
