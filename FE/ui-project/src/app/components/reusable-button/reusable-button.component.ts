import { Component } from '@angular/core';
import * as singleSpa from 'single-spa';
import { AlertLibService } from 'alert-lib';
@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.scss',
})
export class ReusableButtonComponent {
  constructor(private alertService: AlertLibService) {}
  handleSubmit() {
    console.log('Submit clicked!');
  }

  handleCancel() {
    console.log('Cancel clicked!');
  }

  logout() {
    singleSpa.navigateToUrl('/login');
  }

  openAlert() {
    this.alertService.info(
      'For first time data update for migrated users, once you save the field level information on the form, it cannot be edited further. If you need to make further changes, you can do so through separate project update service subsequently.'
    );
  }
}
