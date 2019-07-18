import { Component, OnInit } from '@angular/core';
import { PhonebookItemProps } from 'src/model/phonebookItemProps.model';
import { StateService } from 'src/shared/services/state.service';

@Component({
  selector: 'app-phonecard',
  templateUrl: './phonecard.component.html',
  styleUrls: ['./phonecard.component.scss']
})
export class PhonecardComponent implements OnInit {

  private phonecards: PhonebookItemProps[];

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.phonecards = this.stateService.phonecards.slice();
  }

}
