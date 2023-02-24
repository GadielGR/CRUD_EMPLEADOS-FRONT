import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empleados',
    pathMatch: 'full',
  },
  {
    path: 'empleados',
    loadChildren: () =>
      import('./pages/empleados-page/empleados-page.module').then(
        (m) => m.EmpleadosPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
