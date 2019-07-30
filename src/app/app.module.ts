import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddPhonecardFormComponent } from './add-phonecard-form/add-phonecard-form.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhonecardComponent } from './phonecard/phonecard.component';
import { SigninComponent } from './signin/signin.component';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserRoles } from '../shared/constants';
import { MaterialModule } from '../shared/modules/material.module';

// create factory
export function createAdminOnlyGuard(router: Router, authService: AuthService) {
  return new AuthorizationGuard([UserRoles.Admin], router, authService);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    PhonecardComponent,
    AddPhonecardFormComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    {
      provide: 'adminOnlyGuard',
      useFactory: createAdminOnlyGuard,
      deps: [
        Router,
        AuthService,
      ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
