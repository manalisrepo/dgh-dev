import { TestBed } from '@angular/core/testing';

import { ButtonLibService } from './button-lib.service';

describe('ButtonLibService', () => {
  let service: ButtonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
