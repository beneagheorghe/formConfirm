import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormGuardGuard } from './_guards/form-guard.guard';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'contact',
    canDeactivate: [FormGuardGuard],
    component: ContactComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employee',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
