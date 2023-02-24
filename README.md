# CrudEmpleados

Este proyecto utiliza las siguientes tecnologias:
Angular v15
Bootstrap 5
Nodejs 18

## Inicar el proyecto para desarrollo

- clonarse el proyecto

- entrar a la carpeta del proyecto

- instalar dependencias( npm i )

- Levantar el servidor de desarrollo ( ng serve )

## Estructura del proyecto:

    src/
    ├─ domain/
    │ ├─ base/
    │ | ├─ use-case.ts
    │ ├─ models/
    │ │ ├─ empleado.model.ts
    │ ├─ repositories/
    │ │ ├─ empleado.repository.ts
    │ ├─ usecases/
    │ │ ├─ empleado
    │ │ │ ├─ create-empleado.usecase.ts
    │ │ │ ├─ delete-empleado.usecase.ts
    │ │ │ ├─ get-empleado.usecase.ts
    │ │ │ ├─ get-one-empleado.usecase.ts
    │ │ │ ├─ update-empleado.usecase.ts
    ├─ data/
    │ ├─ respositories/
    │ │ ├─ empleado/
    │ │ │ ├─ empleado-implementation.repository.ts
    │ ├─ data.module.ts
    ├─ presentation/
    │ ├─ app
    | | ├─ shared
    | | │ ├─ atoms
    | | │ ├─ celules
    | | │ ├─ organisms
    | | │ ├─ templates
    | | │ ├─ layouts
    | | ├─ pages
    | | │ ├─ empleados-page
    | | | │ ├─ components
    | | | | │ ├─ atoms
    | | | | │ ├─ celules
    | | | | │ ├─ organisms
    | | | | │ ├─ templates
    | | | | │ ├─ layout

## TODO

### Actividades Pendientes

- [ ] Validaciones Formulario
  - [ ] Agregar Validaciones de requerido
  - [ ] Modal de errores
- [ ] Reesponsivilidad
  - [ ] Agregar Responsibidad
- [ ] Agregar NgRX
  - [ ] Crear Actions
  - [ ] Crear Reducers
  - [ ] Crear Store
- [ ] Security
  - [ ] Agregar un login
  - [ ] Crear Guards
  - [ ] Protenger rutas
- [ ] Categorias
  - [ ] Agregar CRUD Catergorias
- [ ] Puesto Trabajo
  - [ ] Crear CRUD Puestos de Trabajo
  - [ ] Actualizar Formulario Empleado para usar catalogo Puesto de Trabajo
