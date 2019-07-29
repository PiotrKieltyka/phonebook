import { StateService } from './../shared/services/state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'codechallenge';

  constructor(
    private stateServie: StateService
  ) {}

  ngOnInit() {
    this.stateServie.initialiseState();
  }

  ngOnDestroy() {
    localStorage.clear();
    sessionStorage.clear();
  }

}
