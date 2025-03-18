import { TestBed } from '@angular/core/testing';

import { ModalLibService } from './modal-lib.service';

describe('ModalLibService', () => {
  let service: ModalLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
