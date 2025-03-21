import { Component } from '@angular/core';
import { UiTab } from 'ui-tabs-lib';

@Component({
  selector: 'app-bank-guarantee',
  templateUrl: './bank-guarantee.component.html',
  styleUrl: './bank-guarantee.component.scss',
  standalone: false,
})
export class BankGuaranteeComponent {
  tabs: UiTab[] = [
    { tabName: 'tab1', name: 'General Information', disabled: false },
    { tabName: 'tab2', name: 'BG for ONGC', disabled: false },
    { tabName: 'tab3', name: 'Additional Information', disabled: false },
    { tabName: 'tab4', name: 'Declaration', disabled: false },
  ];
  activeTab: string = 'tab1'; // Default active tab

  onTabChange(selectedTab: string) {
    this.activeTab = selectedTab;
  }
}
