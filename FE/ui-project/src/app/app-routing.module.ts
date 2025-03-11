import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';

const routes: Routes = [{ path: '', component: ReusableButtonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
