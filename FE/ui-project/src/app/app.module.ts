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
@NgModule({
  declarations: [AppComponent, ReusableButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionLibModule,
    ButtonLibModule,
    RouterModule,
    RouterTestingModule,
    AlertLibModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
