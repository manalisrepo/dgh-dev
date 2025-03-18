import { NgModule } from '@angular/core';
import { ModalLibComponent } from './modal-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModalLibService } from './modal-lib.service';

@NgModule({
  declarations: [ModalLibComponent],
  imports: [CommonModule, BrowserModule],
  providers: [ModalLibService],
  exports: [ModalLibComponent, CommonModule],
})
export class ModalLibModule {}
