import { TestBed } from '@angular/core/testing';

import { FacultyLeaveService } from './faculty-leave.service';

describe('FacultyLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyLeaveService = TestBed.get(FacultyLeaveService);
    expect(service).toBeTruthy();
  });
});
