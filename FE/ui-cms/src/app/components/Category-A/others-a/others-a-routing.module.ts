import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersAComponent } from './others-a.component';

const routes: Routes = [{ path: '', component: OthersAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthersARoutingModule {}
