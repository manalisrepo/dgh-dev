import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersBRoutingModule } from './others-b-routing.module';
import { OthersBComponent } from './others-b.component';

@NgModule({
  declarations: [OthersBComponent],
  imports: [CommonModule, OthersBRoutingModule],
})
export class OthersBModule {}
