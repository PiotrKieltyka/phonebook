import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecardComponent } from './phonecard.component';
import { StateService } from 'src/shared/services/state.service';

describe('PhonecardComponent', () => {
  let component: PhonecardComponent;
  let fixture: ComponentFixture<PhonecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhonecardComponent
      ],
      providers: [
        StateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecardComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
