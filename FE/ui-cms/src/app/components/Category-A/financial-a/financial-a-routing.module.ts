import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAComponent } from './financial-a.component';
import { BankGuaranteeComponent } from './bank-guarantee/bank-guarantee.component';

const routes: Routes = [
  { path: '', component: FinancialAComponent },
  { path: 'bg', component: BankGuaranteeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialARoutingModule {}
