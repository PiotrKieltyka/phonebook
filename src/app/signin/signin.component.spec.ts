import { AddPhonecardFormComponent } from './../add-phonecard-form/add-phonecard-form.component';
import { AdminComponent } from './../admin/admin.component';
import { HomeComponent } from './../home/home.component';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../../shared/services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhonecardComponent } from '../phonecard/phonecard.component';
import { APP_BASE_HREF } from '@angular/common';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddPhonecardFormComponent,
        AdminComponent,
        HomeComponent,
        PhonecardComponent,
        SigninComponent,
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
      ],
      providers: [
        AuthService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
