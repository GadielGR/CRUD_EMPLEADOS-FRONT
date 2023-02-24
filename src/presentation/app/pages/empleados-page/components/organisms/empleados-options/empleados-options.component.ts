import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleados-options',
  templateUrl: './empleados-options.component.html',
  styleUrls: ['./empleados-options.component.scss']
})
export class EmpleadosOptionsComponent {
  @Output() agregarEmpleado = new EventEmitter();
  @Output() openModal = new EventEmitter();

}
