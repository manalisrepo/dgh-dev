import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {
  //   path: '', component: LayoutComponent,
  //   // children: [
  //   //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   //   { path: 'dashboard', component: DashboardComponent },
  //   //   {
  //   //     path: 'profile', component: ProfileComponent,
  //   //   }
  //   // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
})
export class AppRoutingModule {}
