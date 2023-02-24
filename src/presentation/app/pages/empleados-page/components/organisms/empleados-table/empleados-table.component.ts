import {
  AfterViewInit,
  OnChanges,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  EmpleadosTableDataSource,
  EmpleadosTableItem,
} from './empleados-table-datasource';
import {MatTableDataSource} from '@angular/material/table';

import { Empleado } from 'src/domain/models/empleado.model';

interface RowHeader {
  title: string;
  data: string;
}

@Component({
  selector: 'app-empleados-table',
  templateUrl: './empleados-table.component.html',
  styleUrls: ['./empleados-table.component.scss'],
})
export class EmpleadosTableComponent implements OnChanges, AfterViewInit {
  @Output() verDetalle = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empleado>;
  @Input() data: Empleado[] = [];
  dataSource = new MatTableDataSource<Empleado>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: Array<RowHeader> = [
    { title: 'id', data: 'id' },
    { title: 'Nombre', data: 'nombreCompleto' },
    { title: 'Puesto', data: 'puestoDeTrabajo' },
    { title: 'Salario', data: 'salario' },
    { title: 'fecha de Contratación', data: 'fechaDeContratacion' },
  ];

  columns = [...this.displayedColumns.map((x) => x.data), 'actions'];

  constructor() {
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data;
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  verDetalles(id: number) {
    this.verDetalle.emit(id);
  }
}
