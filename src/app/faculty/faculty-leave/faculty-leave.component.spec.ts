import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLeaveComponent } from './faculty-leave.component';

describe('FacultyLeaveComponent', () => {
  let component: FacultyLeaveComponent;
  let fixture: ComponentFixture<FacultyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
