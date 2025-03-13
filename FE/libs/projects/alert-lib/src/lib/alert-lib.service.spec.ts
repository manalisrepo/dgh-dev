import { TestBed } from '@angular/core/testing';

import { AlertLibService } from './alert-lib.service';

describe('AlertLibService', () => {
  let service: AlertLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
