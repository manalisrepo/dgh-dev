import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, AppComponent], // ✅ Import AppComponent (Standalone)
  bootstrap: [AppComponent], // ✅ Bootstrap AppComponent
})
export class AppModule {}
