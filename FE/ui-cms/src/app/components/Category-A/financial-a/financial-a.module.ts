import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialARoutingModule } from './financial-a-routing.module';
import { FinancialAComponent } from './financial-a.component';

@NgModule({
  declarations: [FinancialAComponent],
  imports: [CommonModule, FinancialARoutingModule],
})
export class FinancialAModule {}
