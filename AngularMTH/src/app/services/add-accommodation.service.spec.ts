import { TestBed } from '@angular/core/testing';

import { AddAccommodationService } from './add-accommodation.service';

describe('AddAccommodationService', () => {
  let service: AddAccommodationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAccommodationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});