import { TestBed } from '@angular/core/testing';

import { FlyoutLibService } from './flyout-lib.service';

describe('FlyoutLibService', () => {
  let service: FlyoutLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyoutLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
