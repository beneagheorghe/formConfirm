import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee-edit/edit-employee.component';
import { FormGuardGuard } from '../_guards/form-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'edit/:index',
    canDeactivate: [FormGuardGuard],
    component: EditEmployeeComponent,
  },
  {
    path: 'create',
    canDeactivate: [FormGuardGuard],
    component: CreateEmployeeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
