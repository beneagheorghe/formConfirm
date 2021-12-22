import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';
import { EmployeeListService } from 'src/app/_services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'weight', 'position', 'edit'];
  dataSource: Employee[];

  constructor(private employeeListService: EmployeeListService) {}

  ngOnInit(): void {
    this.dataSource = this.employeeListService.EMPLOYEE_DATA;
  }
}
