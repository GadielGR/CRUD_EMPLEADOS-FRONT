import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

export interface EmpeladoRepository {
  getAll(): Observable<Empleado[]>;
  getById(id: number): Observable<Empleado>;
  create(empleado: Empleado): Observable<Empleado>;
  update(empleado: Empleado): Observable<Empleado>;
  delete(id: number): Observable<void>;
}
