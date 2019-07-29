import { MaterialModule } from 'src/shared/modules/material.module';
import { AddPhonecardFormComponent } from './../add-phonecard-form/add-phonecard-form.component';
import { SigninComponent } from './../signin/signin.component';
import { PhonecardComponent } from './../phonecard/phonecard.component';
import { AdminComponent } from './../admin/admin.component';
import { HomeComponent } from './../home/home.component';
import { AuthService } from './../../shared/services/auth.service';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddPhonecardFormComponent,
        AdminComponent,
        HomeComponent,
        HeaderComponent,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
