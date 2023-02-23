import { EmpeladoRepository } from "src/domain/repositories/empleado.repository";
import { CreateEmpleadoUseCase } from "src/domain/usecases/empleado/create-empelado.usecase";
import { DeleteEmpleadoUseCase } from "src/domain/usecases/empleado/delete-empleado.usecase";
import { GetAllEmpeladosUseCase } from "src/domain/usecases/empleado/get-empleado.usecase";
import { GetOneEmpleadoUseCase } from "src/domain/usecases/empleado/get-one-empleado.usecase";
import { UpdateEmpleadoUseCase } from "src/domain/usecases/empleado/udpate-empleado.usecase";


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
