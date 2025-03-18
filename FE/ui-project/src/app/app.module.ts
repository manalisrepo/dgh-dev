import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';
import { AccordionLibModule } from 'accordion-lib';
import { ButtonLibModule } from 'button-lib';
import { RouterModule } from '@angular/router';
import { AlertLibModule } from 'alert-lib';
import { ModalLibModule } from 'modal-lib';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ReusableButtonComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AccordionLibModule,
    ButtonLibModule,
    RouterModule,
    RouterTestingModule,
    AlertLibModule,
    ModalLibModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
