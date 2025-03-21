import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';
import { AccordionLibModule } from 'accordion-lib';
import { ButtonLibModule } from 'button-lib';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AlertLibModule } from 'alert-lib';
import { CommonPageComponent } from './components/common-page/common-page.component';
import { UiTabsLibModule } from 'ui-tabs-lib';
import { ModalLibModule } from 'modal-lib';
import { FileUploadLibModule } from 'file-upload-lib';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    ReusableButtonComponent,
    SidenavComponent,
    FileUploadComponent,
    CommonPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    AccordionLibModule,
    ButtonLibModule,
    AlertLibModule,
    UiTabsLibModule,
    ModalLibModule,
    FileUploadLibModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
