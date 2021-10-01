import { TestBed } from '@angular/core/testing';

import { FacultyFeedbackService } from './faculty-feedback.service';

describe('FacultyFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyFeedbackService = TestBed.get(FacultyFeedbackService);
    expect(service).toBeTruthy();
  });
});
