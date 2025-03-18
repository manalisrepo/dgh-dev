import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialBComponent } from './financial-b.component';

const routes: Routes = [{ path: '', component: FinancialBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialBRoutingModule {}
