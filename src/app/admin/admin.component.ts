import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { StateService } from 'src/shared/services/state.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'birthday'];
  private sortedData$ = this.stateService.sortedData$;

  constructor(
    private stateService: StateService
  ) {
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    this.stateService.sortData(sort);
  }

  handleFormSubmit(formValue){
    this.stateService.updateState(formValue);
  }

}
