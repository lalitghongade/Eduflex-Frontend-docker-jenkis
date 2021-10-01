import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyFacultyLeaveComponent } from './apply-faculty-leave.component';

describe('ApplyFacultyLeaveComponent', () => {
  let component: ApplyFacultyLeaveComponent;
  let fixture: ComponentFixture<ApplyFacultyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFacultyLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyFacultyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
