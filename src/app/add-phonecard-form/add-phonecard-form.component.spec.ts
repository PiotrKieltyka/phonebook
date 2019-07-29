import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './../admin/admin.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonecardFormComponent } from './add-phonecard-form.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { StateService } from 'src/shared/services/state.service';

describe('AddPhonecardFormComponent', () => {
  let component: AddPhonecardFormComponent;
  let fixture: ComponentFixture<AddPhonecardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddPhonecardFormComponent,
        AdminComponent
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule
      ],
      providers: [
        StateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhonecardFormComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
