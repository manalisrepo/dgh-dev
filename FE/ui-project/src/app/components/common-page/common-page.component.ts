import { Component } from '@angular/core';
import { UiTab } from 'ui-tabs-lib';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss'],
})
export class CommonPageComponent {
  tabs: UiTab[] = [
    { tabName: 'tab1', name: 'Tab 1', disabled: false },
    { tabName: 'tab2', name: 'Tab 2', disabled: false },
    { tabName: 'tab3', name: 'Tab 3', disabled: false },
  ];

  activeTab: string = 'tab1'; // Default active tab

  onTabChange(selectedTab: string) {
    this.activeTab = selectedTab;
  }
}
