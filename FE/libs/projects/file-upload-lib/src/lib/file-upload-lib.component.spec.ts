import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadLibComponent } from './file-upload-lib.component';

describe('FileUploadLibComponent', () => {
  let component: FileUploadLibComponent;
  let fixture: ComponentFixture<FileUploadLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploadLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
