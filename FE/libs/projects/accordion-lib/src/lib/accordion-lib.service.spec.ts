import { TestBed } from '@angular/core/testing';

import { AccordionLibService } from './accordion-lib.service';

describe('AccordionLibService', () => {
  let service: AccordionLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
