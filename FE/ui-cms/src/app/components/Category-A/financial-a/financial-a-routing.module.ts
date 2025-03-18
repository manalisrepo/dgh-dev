import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAComponent } from './financial-a.component';

const routes: Routes = [{ path: '', component: FinancialAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialARoutingModule {}
