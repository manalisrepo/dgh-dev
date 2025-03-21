import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/Category-A/financial-a/financial-a.module').then(
        (m) => m.FinancialAModule
      ),
  },
  {
    path: 'technical-A',
    loadChildren: () =>
      import('./components/Category-A/technical-a/technical-a.module').then(
        (m) => m.TechnicalAModule
      ),
  },

  {
    path: 'others-A',
    loadChildren: () =>
      import('./components/Category-A/others-a/others-a.module').then(
        (m) => m.OthersAModule
      ),
  },
  {
    path: 'others-b',
    loadChildren: () =>
      import('./components/Category-B/others-b/others-b.module').then(
        (m) => m.OthersBModule
      ),
  },
  {
    path: 'financial-b',
    loadChildren: () =>
      import('./components/Category-B/financial-b/financial-b.module').then(
        (m) => m.FinancialBModule
      ),
  },
  {
    path: 'technical-b',
    loadChildren: () =>
      import('./components/Category-B/technical-b/technical-b.module').then(
        (m) => m.TechnicalBModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/cms' }],
})
export class AppRoutingModule {}
