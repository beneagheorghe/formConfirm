import { Injectable } from '@angular/core';
import { Employee } from '../_interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  EMPLOYEE_DATA: Employee[] = [
    { index: 1, name: 'Hydrogen', weight: 80, position: 'Developer' },
    { index: 2, name: 'Helium', weight: 80, position: 'Developer' },
    { index: 3, name: 'Lithium', weight: 80, position: 'Developer' },
    { index: 4, name: 'Beryllium', weight: 80, position: 'Developer' },
    { index: 5, name: 'Boron', weight: 80, position: 'Developer' },
    { index: 6, name: 'Carbon', weight: 80, position: 'Developer' },
    { index: 7, name: 'Nitrogen', weight: 80, position: 'Developer' },
    { index: 8, name: 'Oxygen', weight: 80, position: 'Developer' },
    { index: 9, name: 'Fluorine', weight: 80, position: 'Developer' },
    { index: 10, name: 'Neon', weight: 80, position: 'Developer' },
  ];
  constructor() {}

  addEmployee(data: Employee) {
    this.EMPLOYEE_DATA.push(data);
  }
}
