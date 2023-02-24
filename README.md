# CrudEmpleados

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Este proyecto utiliza las siguientes tecnologias:
Angular v15
Bootstrap 5
Nodejs 18

Estructura del proyecto:

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
