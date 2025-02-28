import { NgModule } from '@angular/core';
import { AlertLibComponent } from './alert-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AlertLibService } from './alert-lib.service';

@NgModule({
  declarations: [AlertLibComponent],
  imports: [CommonModule, BrowserModule],
  providers: [AlertLibService],
  exports: [AlertLibComponent],
})
export class AlertLibModule {}
