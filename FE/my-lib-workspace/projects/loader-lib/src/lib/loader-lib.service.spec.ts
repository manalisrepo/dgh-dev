import { TestBed } from '@angular/core/testing';

import { LoaderLibService } from './loader-lib.service';

describe('LoaderLibService', () => {
  let service: LoaderLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
