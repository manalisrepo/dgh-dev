import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialBRoutingModule } from './financial-b-routing.module';
import { FinancialBComponent } from './financial-b.component';

@NgModule({
  declarations: [FinancialBComponent],
  imports: [CommonModule, FinancialBRoutingModule],
})
export class FinancialBModule {}
