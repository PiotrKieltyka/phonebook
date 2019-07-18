import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonecardFormComponent } from './add-phonecard-form.component';

describe('AddPhonecardFormComponent', () => {
  let component: AddPhonecardFormComponent;
  let fixture: ComponentFixture<AddPhonecardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhonecardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhonecardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
