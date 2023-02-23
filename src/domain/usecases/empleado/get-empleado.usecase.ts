import { UseCase } from "src/domain/base/use-case";
import { EmpeladoRepository } from "../../repositories/empleado.repository";
import { Empleado } from "../../models/empleado.model";
import { Observable } from "rxjs";

export class GetAllEmpeladosUseCase implements UseCase<null, Empleado[]> {
    constructor(private empleadoRepository: EmpeladoRepository){}
    execute(param: null): Observable<Empleado[]> {
        return this.empleadoRepository.getAll();
    }
   

}