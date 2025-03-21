import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialARoutingModule } from './financial-a-routing.module';
import { FinancialAComponent } from './financial-a.component';
import { BankGuaranteeComponent } from './bank-guarantee/bank-guarantee.component';
import { DeclarationComponent } from './bank-guarantee/declaration/declaration.component';
import { UiTabsLibModule } from 'ui-tabs-lib';

@NgModule({
  declarations: [
    FinancialAComponent,
    BankGuaranteeComponent,
    DeclarationComponent,
  ],
  imports: [CommonModule, FinancialARoutingModule, UiTabsLibModule],
})
export class FinancialAModule {}
