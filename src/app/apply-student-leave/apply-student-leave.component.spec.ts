import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyStudentLeaveComponent } from './apply-student-leave.component';

describe('ApplyStudentLeaveComponent', () => {
  let component: ApplyStudentLeaveComponent;
  let fixture: ComponentFixture<ApplyStudentLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyStudentLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyStudentLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
