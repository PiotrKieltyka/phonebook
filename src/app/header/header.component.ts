import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItemProps } from 'src/model/navigationItemProps.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerItems: NavigationItemProps[] = [
    {
      name: 'Sign Out',
      url: 'signout',
      showMenuItem$: this.authService.isLoggedIn$,
      clickHandler: () => {
        this.authService.signout();
        this.router.navigateByUrl('/signin');
      }
    },
    {
      name: 'Sign In',
      url: 'signin',
      showMenuItem$: this.authService.isLoggedOut$
    },
    {
      name: 'Edit',
      url: 'edit',
      showMenuItem$: this.authService.isAdmin$
    },
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Cards',
      url: 'cards'
    },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.authService.user$.subscribe(x => console.log('user', x))
  }

}
