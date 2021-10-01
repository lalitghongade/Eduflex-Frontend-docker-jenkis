import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassYearComponent } from './manage-class-year.component';

describe('ManageClassYearComponent', () => {
  let component: ManageClassYearComponent;
  let fixture: ComponentFixture<ManageClassYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
