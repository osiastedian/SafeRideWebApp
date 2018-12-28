import { TestBed } from '@angular/core/testing';

import { RoadsApiService } from './roads-api.service';

describe('RoadsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoadsApiService = TestBed.get(RoadsApiService);
    expect(service).toBeTruthy();
  });
});
