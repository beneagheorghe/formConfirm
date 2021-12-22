import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SaveData } from 'src/app/_interfaces/save-data.interface';
import { EmployeeListService } from 'src/app/_services/employee-list.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit, SaveData {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeListService: EmployeeListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
    });
  }

  public createEmployee(): void {
    this.employeeListService.addEmployee({
      index: this.employeeListService.EMPLOYEE_DATA.length + 1,
      ...this.form.getRawValue(),
    });
    this.router.navigate(['/employee']);
    this.form.reset();
  }
}
