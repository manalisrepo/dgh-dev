import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

import { MyLibDemoModule } from 'my-lib-demo';
import { AlertLibModule } from 'alert-lib';
import { LoaderLibModule } from 'loader-lib';
import { ModalLibModule } from 'modal-lib';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ModalComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MyLibDemoModule,
    AlertLibModule,
    ModalLibModule,
    LoaderLibModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
