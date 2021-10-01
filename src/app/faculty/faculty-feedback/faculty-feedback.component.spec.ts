import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFeedbackComponent } from './faculty-feedback.component';

describe('FacultyFeedbackComponent', () => {
  let component: FacultyFeedbackComponent;
  let fixture: ComponentFixture<FacultyFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
