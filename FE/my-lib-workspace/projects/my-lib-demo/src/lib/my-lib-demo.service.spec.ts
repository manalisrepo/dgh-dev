import { TestBed } from '@angular/core/testing';

import { MyLibDemoService } from './my-lib-demo.service';

describe('MyLibDemoService', () => {
  let service: MyLibDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
