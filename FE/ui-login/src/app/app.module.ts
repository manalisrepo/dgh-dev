import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';  
import { ButtonLibModule } from "button-lib";
import { FlyoutLibModule } from "flyout-lib";
import { HttpClientModule } from '@angular/common/http';
import { FormFieldsLibModule } from "form-fields-lib";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, ButtonLibModule, FlyoutLibModule, HttpClientModule, FormFieldsLibModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
