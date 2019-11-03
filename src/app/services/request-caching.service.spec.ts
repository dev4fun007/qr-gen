import { TestBed } from '@angular/core/testing';

import { RequestCachingService } from './request-caching.service';

describe('RequestCachingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCachingService = TestBed.get(RequestCachingService);
    expect(service).toBeTruthy();
  });
});
