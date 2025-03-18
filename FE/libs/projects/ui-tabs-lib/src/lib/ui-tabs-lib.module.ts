import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTabComponent } from './components/ui-tabs/ui-tabs.component';

@NgModule({
  declarations: [UiTabComponent],
  imports: [CommonModule],
  exports: [UiTabComponent],
})
export class UiTabsLibModule {}
