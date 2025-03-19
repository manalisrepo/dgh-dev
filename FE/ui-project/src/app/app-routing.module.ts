import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';
import { APP_BASE_HREF } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [{ path: '', component: ReusableButtonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/project' }],
})
export class AppRoutingModule {}
