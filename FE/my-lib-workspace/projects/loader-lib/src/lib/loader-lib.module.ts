import { NgModule } from '@angular/core';
import { LoaderLibComponent } from './loader-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderLibService } from './loader-lib.service';

@NgModule({
  declarations: [LoaderLibComponent],
  imports: [CommonModule, BrowserModule],
  providers: [LoaderLibService],
  exports: [LoaderLibComponent, CommonModule],
})
export class LoaderLibModule {}
