import { UseCase } from 'src/domain/base/use-case';
import { Empleado } from '../../models/empleado.model';
import { Observable } from 'rxjs';
import { EmpeladoRepository } from '../../repositories/empleado.repository';

export class CreateEmpleadoUseCase implements UseCase<Empleado, Empleado> {
  constructor(private empleadoRepository: EmpeladoRepository) {}
  execute(param: Empleado): Observable<Empleado> {
    return this.empleadoRepository.create(param);
  }
}
