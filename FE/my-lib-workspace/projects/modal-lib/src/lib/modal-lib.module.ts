import { NgModule } from '@angular/core';
import { ModalLibComponent } from './modal-lib.component';
import { ModalLibService } from './modal-lib.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ModalLibComponent],
  imports: [CommonModule, BrowserModule],
  providers: [ModalLibService],
  exports: [ModalLibComponent, CommonModule],
})
export class ModalLibModule {}
