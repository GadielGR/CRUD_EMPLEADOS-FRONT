import { UseCase } from 'src/domain/base/use-case';
import { Empleado } from '../../models/empleado.model';
import { Observable } from 'rxjs';
import { EmpeladoRepository } from '../../repositories/empleado.repository';

export class DeleteEmpleadoUseCase implements UseCase<number, void> {
  constructor(private empleadoRepository: EmpeladoRepository) {}
  execute(param: number): Observable<void> {
    return this.empleadoRepository.delete(param);
  }
}
