import { NgModule } from '@angular/core';
import { FileUploadLibComponent } from './file-upload-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FileUploadLibComponent],
  imports: [CommonModule, BrowserModule],
  exports: [FileUploadLibComponent],
})
export class FileUploadLibModule {}
