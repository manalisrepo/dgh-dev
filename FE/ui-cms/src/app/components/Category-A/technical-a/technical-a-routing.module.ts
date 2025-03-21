import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalAComponent } from './technical-a.component';

const routes: Routes = [{ path: '', component: TechnicalAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalARoutingModule {}
