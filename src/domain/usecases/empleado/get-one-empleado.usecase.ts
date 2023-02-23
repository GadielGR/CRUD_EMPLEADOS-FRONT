import { UseCase } from 'src/domain/base/use-case';
import { Empleado } from '../../models/empleado.model';
import { Observable } from 'rxjs';
import { EmpeladoRepository } from '../../repositories/empleado.repository';

export class GetOneEmpleadoUseCase implements UseCase<number, Empleado> {
  constructor(private empleadoRepository: EmpeladoRepository) {}
  execute(param: number): Observable<Empleado> {
    return this.empleadoRepository.getById(param);
  }
}
