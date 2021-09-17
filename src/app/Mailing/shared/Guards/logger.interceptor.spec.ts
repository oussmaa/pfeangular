import { TestBed } from '@angular/core/testing';

import { LoggerInterceptor } from './logger.interceptor';

describe('LoggerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoggerInterceptor = TestBed.inject(LoggerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
