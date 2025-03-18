import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersBComponent } from './others-b.component';

const routes: Routes = [{ path: '', component: OthersBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthersBRoutingModule {}
