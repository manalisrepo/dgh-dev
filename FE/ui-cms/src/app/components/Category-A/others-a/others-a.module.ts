import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersARoutingModule } from './others-a-routing.module';
import { OthersAComponent } from './others-a.component';

@NgModule({
  declarations: [OthersAComponent],
  imports: [CommonModule, OthersARoutingModule],
})
export class OthersAModule {}
