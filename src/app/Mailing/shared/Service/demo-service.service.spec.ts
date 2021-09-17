import { TestBed } from '@angular/core/testing';

import { DemoServiceService } from './demo-service.service';

describe('DemoServiceService', () => {
  let service: DemoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
