import { TestBed } from '@angular/core/testing';

import { UsergardesGuard } from './usergardes.guard';

describe('UsergardesGuard', () => {
  let guard: UsergardesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsergardesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
