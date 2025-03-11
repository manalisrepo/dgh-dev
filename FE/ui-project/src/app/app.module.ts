import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';
import { AccordionLibModule } from  'accordion-lib';
import { ButtonLibModule } from 'button-lib';
@NgModule({
  declarations: [AppComponent, FirstcomponentComponent, ReusableButtonComponent],
  imports: [BrowserModule, AppRoutingModule, AccordionLibModule, ButtonLibModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
