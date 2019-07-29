import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PhonebookItemProps } from 'src/model/phonebookItemProps.model';
import { PhonecardsDB } from 'src/assets/seed.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { compare } from '../util/compare';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private sortedDataSubject = new BehaviorSubject([]);
  sortedData$: Observable<PhonebookItemProps[]> = this.sortedDataSubject.asObservable();

  private _phonecards: PhonebookItemProps[];

  private sort: Sort = {
    active: '',
    direction: ''
  };

  private lastIdNumber: number;

  constructor() { }

  get phonecards(): PhonebookItemProps[] {
    return this._phonecards;
  }

  set phonecards(phonecards: PhonebookItemProps[]) {
    this._phonecards = phonecards;
  }

  initialiseState(): void {
    this.phonecards = JSON.parse(localStorage.getItem('phonecards'));
    if (!this.phonecards) {
      this.phonecards = PhonecardsDB;
      this.updateLocalStorage();
    }

    this.lastIdNumber = this.getLastIdNumber();
    this.sortedDataSubject.next(this.phonecards);
  }

  private getLastIdNumber() {
    let greatestIdNumber = 0;

    this.phonecards.map(item => {
      greatestIdNumber = item.id > greatestIdNumber ? item.id : greatestIdNumber;
    });

    return greatestIdNumber;
  }

  private updateLocalStorage() {
    localStorage.setItem('phonecards', JSON.stringify(this.phonecards));
  }

  sortData(sort?: Sort) {
    this.sort = sort ? sort : this.sort;
    const phonecardsCopy = [...this.phonecards];
    let sortedData;

    if (!this.sort.active || this.sort.direction === '') {
      sortedData = phonecardsCopy;
    } else {
      sortedData = phonecardsCopy.sort((a, b) => {
        const isAsc = this.sort.direction === 'asc';
        switch (this.sort.active) {
          case 'id': return compare(a.id, b.id, isAsc);
          case 'name': return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
          case 'phone': return compare(a.phone, b.phone, isAsc);
          case 'email': return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
          default: return 0;
        }
      });
    }
    this.sortedDataSubject.next(sortedData);
  }

  updateState(phonecard: PhonebookItemProps): void {
    const newContact = { id: ++this.lastIdNumber, ...phonecard };
    this.phonecards = [ ...this.phonecards, newContact ];
    this.updateLocalStorage();
    this.sortData();
  }

}
