import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmpleadoImplementationRepository } from 'src/app/domain/repositories/empleado-implements.repository';
import { EmpeladoRepository } from 'src/app/domain/repositories/empleado.repository';
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
