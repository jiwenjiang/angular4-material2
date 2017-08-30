import { TestBed, inject } from '@angular/core/testing';

import { NotyService } from './noty.service';

describe('NotyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotyService]
    });
  });

  it('should be created', inject([NotyService], (service: NotyService) => {
    expect(service).toBeTruthy();
  }));
});
