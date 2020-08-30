import { TestBed } from '@angular/core/testing';

import { HolidayLocationVisitService } from './holiday-location-visit.service';

describe('HolidayLocationVisitService', () => {
  let service: HolidayLocationVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayLocationVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});