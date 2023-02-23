import { EmpeladoRepository } from 'src/app/domain/repositories/empleado.repository';
import { CreateEmpleadoUseCase } from 'src/app/domain/usecases/empleado/createEmpelado.usecase';
import { DeleteEmpleadoUseCase } from 'src/app/domain/usecases/empleado/deleteEmpleado.usecase';
import { GetAllEmpeladosUseCase } from 'src/app/domain/usecases/empleado/getEmpleado.usecase';
import { GetOneEmpleadoUseCase } from 'src/app/domain/usecases/empleado/getOneEmpleado.usecase';
import { UpdateEmpleadoUseCase } from 'src/app/domain/usecases/empleado/udpateEmpleado.usecase';

const empleadoGetAllUseCaseFactory = (empleadoRepo: EmpeladoRepository) =>
  new GetAllEmpeladosUseCase(empleadoRepo);
export const empleadoGetAllUseCaseProvider = {
  provide: GetAllEmpeladosUseCase,
  useFactory: empleadoGetAllUseCaseFactory,
  deps: [EmpeladoRepository],
};

const empleadoGetOneUseCaseFactory = (empleadoRepo: EmpeladoRepository) =>
  new GetOneEmpleadoUseCase(empleadoRepo);
export const empleadoGetOneUseCaseProvider = {
  provide: GetOneEmpleadoUseCase,
  useFactory: empleadoGetOneUseCaseFactory,
  deps: [EmpeladoRepository],
};

const empleadoCreateUseCaseFactory = (empleadoRepo: EmpeladoRepository) =>
  new CreateEmpleadoUseCase(empleadoRepo);
export const empleadoCreateUseCaseProvider = {
  provide: CreateEmpleadoUseCase,
  useFactory: empleadoCreateUseCaseFactory,
  deps: [EmpeladoRepository],
};

const empleadoUpdateUseCaseFactory = (empleadoRepo: EmpeladoRepository) =>
  new UpdateEmpleadoUseCase(empleadoRepo);
export const empleadoUpdateUseCaseProvider = {
  provide: UpdateEmpleadoUseCase,
  useFactory: empleadoUpdateUseCaseFactory,
  deps: [EmpeladoRepository],
};
const empleadoDeleteUseCaseFactory = (empleadoRepo: EmpeladoRepository) =>
  new DeleteEmpleadoUseCase(empleadoRepo);
export const empleadoDeleteUseCaseProvider = {
  provide: DeleteEmpleadoUseCase,
  useFactory: empleadoDeleteUseCaseFactory,
  deps: [EmpeladoRepository],
};
