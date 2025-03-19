import { TestBed } from '@angular/core/testing';

import { FileUploadLibService } from './file-upload-lib.service';

describe('FileUploadLibService', () => {
  let service: FileUploadLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
