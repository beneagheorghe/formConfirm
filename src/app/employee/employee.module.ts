import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MaterialModule } from '../modules/material.module';

// Import Components
import { EditEmployeeComponent } from './employee-edit/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EditEmployeeComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EmployeeRoutingModule,
    MaterialModule,
  ],
})
export class EmployeeModule {}
