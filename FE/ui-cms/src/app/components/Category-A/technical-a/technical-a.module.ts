import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalARoutingModule } from './technical-a-routing.module';
import { TechnicalAComponent } from './technical-a.component';

@NgModule({
  declarations: [TechnicalAComponent],
  imports: [CommonModule, TechnicalARoutingModule],
})
export class TechnicalAModule {}
