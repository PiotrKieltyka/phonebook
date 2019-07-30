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
import { NavigationItemProps } from 'src/model/navigationItemProps.model';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const authServiceStub = {
    isAdmin$: null,
    isLoggedIn$: null,
    isLoggedOut$: null
  };

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

  it('should show the correct menu items', () => {
    authServiceStub.isLoggedIn$ = of(true);
    authServiceStub.isLoggedOut$ = of(false);
    authServiceStub.isAdmin$ = of(true);

    const headerItems: NavigationItemProps[] = [
      {
        name: 'Sign Out',
        url: 'signout',
        showMenuItem$: authServiceStub.isLoggedIn$,
      },
      {
        name: 'Sign In',
        url: 'signin',
        showMenuItem$: authServiceStub.isLoggedOut$
      },
      {
        name: 'Edit',
        url: 'edit',
        showMenuItem$: authServiceStub.isAdmin$
      }
    ]

    component.headerItems = headerItems;

    fixture.detectChanges();

    const signoutButton = fixture.debugElement.query(By.css(`#btn-signout`));
    const signinButton = fixture.debugElement.query(By.css(`#btn-signin`));
    const editButton = fixture.debugElement.query(By.css(`#btn-edit`));

    expect(signoutButton).not.toBe(null);
    expect(signinButton).toBe(null);
    expect(editButton).not.toBe(null);

  });

});
