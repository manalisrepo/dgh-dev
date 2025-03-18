import { TestBed } from '@angular/core/testing';

import { FormFieldsLibService } from './form-fields-lib.service';

describe('FormFieldsLibService', () => {
  let service: FormFieldsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
