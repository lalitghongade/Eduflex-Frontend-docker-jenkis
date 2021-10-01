import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultyFeedbackComponent } from './add-faculty-feedback.component';

describe('AddFacultyFeedbackComponent', () => {
  let component: AddFacultyFeedbackComponent;
  let fixture: ComponentFixture<AddFacultyFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacultyFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacultyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
