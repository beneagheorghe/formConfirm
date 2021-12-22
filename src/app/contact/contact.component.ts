import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SaveData } from '../_interfaces/save-data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, SaveData {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      comment: new FormControl(''),
    });
  }
}
