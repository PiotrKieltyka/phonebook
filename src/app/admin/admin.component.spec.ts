import { AddPhonecardFormComponent } from './../add-phonecard-form/add-phonecard-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { StateService } from 'src/shared/services/state.service';
import { MaterialModule } from 'src/shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        AddPhonecardFormComponent
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
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
