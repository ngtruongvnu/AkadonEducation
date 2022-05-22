import { TestBed } from '@angular/core/testing';

import { TutorScheduleService } from './tutor-schedule.service';

describe('TutorScheduleService', () => {
  let service: TutorScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
