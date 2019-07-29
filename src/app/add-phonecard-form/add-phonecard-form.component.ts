import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-phonecard-form',
  templateUrl: './add-phonecard-form.component.html',
  styleUrls: ['./add-phonecard-form.component.scss'],
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
      birthday: [ moment(['2017/01/01']), Validators.required],
      avatar: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    this.phonecardForm.value.birthday = this.phonecardForm.value.birthday.format('DD/MM/YYYY');
    this.submitForm.emit(this.phonecardForm.value);
  }

}

