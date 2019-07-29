import { ANONYMOUS_USER, UserRoles } from '../constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from 'src/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user)); // filter for 'null pointer exception'

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.email));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));
  isAdmin$: Observable<boolean> = this.user$.pipe(map(user => user.roles ? user.roles.indexOf(UserRoles.Admin) > -1 : false));

  constructor() {
    this.getUserFromSessionStorage();
  }

  private getUserFromSessionStorage(): void {
    const user = JSON.parse(sessionStorage.getItem('User'));
    if (user) {
      this.userSubject.next(user);
    }
  }

  signin(email: string, password: string): Promise<User> {

    return new Promise((resolve, reject) => {
        let user: User;

        if (email === 'p.kieltyka@gmail.com' && password === '123456') {
          user = { email };
        }

        if (email === 'piotr.kieltyka@gmail.com' && password === '654321') {
          user = { email, roles: [UserRoles.Admin] };
        }

        if (user) {
          this.userSubject.next(user);
          sessionStorage.setItem('User', JSON.stringify(user));
          resolve(user);
        } else {
          reject('Incorrect credentials');
        }
    });

  }

  signout() {
    this.userSubject.next(ANONYMOUS_USER);
    sessionStorage.clear();
  }

}
