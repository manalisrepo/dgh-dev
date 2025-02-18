import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '', component: DashboardComponent },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
