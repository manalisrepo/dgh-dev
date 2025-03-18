import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalBRoutingModule } from './technical-b-routing.module';
import { TechnicalBComponent } from './technical-b.component';

@NgModule({
  declarations: [TechnicalBComponent],
  imports: [CommonModule, TechnicalBRoutingModule],
})
export class TechnicalBModule {}
