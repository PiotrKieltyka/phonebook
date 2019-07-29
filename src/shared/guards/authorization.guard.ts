import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { intersection } from 'lodash';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(
        private allowedRoles: string[],
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(): Observable<boolean> {
        return this.authService.user$.pipe(
            map(user => intersection(this.allowedRoles, user.roles).length > 0),
            tap(allowed => {
                if (!allowed) {
                    this.router.navigateByUrl('/signin');
                }
            }));
    }
}
