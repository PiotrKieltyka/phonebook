import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-add-phonecard-form',
  templateUrl: './add-phonecard-form.component.html',
  styleUrls: ['./add-phonecard-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddPhonecardFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter();

  phonecardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.phonecardForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      birthdate: [{ value: '', disabled: true }, Validators.required],
      avatar: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    this.submitForm.emit(this.phonecardForm.value);
  }

}

