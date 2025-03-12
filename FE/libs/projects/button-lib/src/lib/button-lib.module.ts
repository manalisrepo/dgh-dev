import { NgModule } from '@angular/core';
import { ButtonLibComponent } from './button-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ButtonLibComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ButtonLibComponent],
})
export class ButtonLibModule {}
