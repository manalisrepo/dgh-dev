import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalBComponent } from './technical-b.component';

const routes: Routes = [{ path: '', component: TechnicalBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalBRoutingModule {}
