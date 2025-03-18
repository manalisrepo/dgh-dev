import { NgModule } from '@angular/core';
import { AccordionLibComponent } from './accordion-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AccordionLibComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    AccordionLibComponent
  ]
})
export class AccordionLibModule { }
