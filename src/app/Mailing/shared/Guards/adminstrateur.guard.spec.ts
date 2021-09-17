import { TestBed } from '@angular/core/testing';

import { AdminstrateurGuard } from './adminstrateur.guard';

describe('AdminstrateurGuard', () => {
  let guard: AdminstrateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminstrateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
