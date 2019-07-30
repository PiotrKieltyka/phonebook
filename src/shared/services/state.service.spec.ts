import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { PhonebookItemProps } from 'src/model/phonebookItemProps.model';

describe('StateService', () => {

  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update state when "updateState" method has been called', () => {
    service.initialiseState();

    const phonebookItem: PhonebookItemProps = {
      name: 'Erin Eyeball',
      phone: '(123) 456-7890',
      email: 'one.eye.open@ilumin.com',
      birthday: '01/01/1980',
      avatar: 'http://lorempixel.com/300/300/people/1'
    };

    service.updateState(phonebookItem);

    expect(service.phonecards.length).toBe(9);

    service.sortedData$.subscribe(data => {
      expect(data.length).toBe(9);
    });

  });
});
