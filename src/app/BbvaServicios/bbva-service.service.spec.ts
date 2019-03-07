import { TestBed } from '@angular/core/testing';

import { BbvaServiceService } from './bbva-service.service';

describe('BbvaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbvaServiceService = TestBed.get(BbvaServiceService);
    expect(service).toBeTruthy();
  });
});
