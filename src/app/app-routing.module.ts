import { PhonecardComponent } from './phonecard/phonecard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: AdminComponent, canActivate: ['adminOnlyGuard'] },
  { path: 'cards', component: PhonecardComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
