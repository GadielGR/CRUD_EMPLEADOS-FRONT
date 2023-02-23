import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

export abstract class EmpeladoRepository {
  abstract getAll(): Observable<Empleado[]>;
  abstract getById(id: number): Observable<Empleado>;
  abstract create(empleado: Empleado): Observable<Empleado>;
  abstract update(empleado: Empleado): Observable<Empleado>;
  abstract delete(id: number): Observable<void>;
}
