import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosPageComponent } from './empleados-page.component';
import { EmpleadosRoutingModule } from './empleados.routing.module';

import { EmpleadosTableComponent } from './components/organisms/empleados-table/empleados-table.component';
import { EmpleadosOptionsComponent } from './components/organisms/empleados-options/empleados-options.component';
import { EmpleadoFormularioComponent } from './components/celules/empleado-formulario/empleado-formulario.component';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [EmpleadosPageComponent, EmpleadosTableComponent, EmpleadosOptionsComponent, EmpleadoFormularioComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatStepperModule,
  ],
})
export class EmpleadosPageModule {}
