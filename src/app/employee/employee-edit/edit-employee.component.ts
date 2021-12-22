import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaveData } from 'src/app/_interfaces/save-data.interface';
import { Employee } from 'src/app/_models/employee.model';
import { EmployeeListService } from 'src/app/_services/employee-list.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit, SaveData {
  form: FormGroup;
  private indexEmployee: number;
  constructor(
    private fb: FormBuilder,
    private employeeListService: EmployeeListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.setFormEmployee();
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      weight: new FormControl(''),
      position: new FormControl(''),
    });
  }

  private getDataEmploye(index: string): Employee {
    return this.employeeListService.EMPLOYEE_DATA[index];
  }

  private setFormEmployee(): void {
    const employee = this.getDataEmploye(
      this.route.snapshot.paramMap.get('index')
    );
    for (const [formControlName, value] of Object.entries(employee)) {
      this.setControlVal(formControlName, value);
    }
  }

  private setControlVal(formControlName: string, v: string): void {
    let control: AbstractControl;
    control = this.form.controls[formControlName];
    if (control) {
      control.setValue(v);
    }
  }
}
