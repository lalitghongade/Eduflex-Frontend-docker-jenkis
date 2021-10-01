import { TestBed } from '@angular/core/testing';

import { StudentLeaveService } from './student-leave.service';

describe('StudentLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentLeaveService = TestBed.get(StudentLeaveService);
    expect(service).toBeTruthy();
  });
});
