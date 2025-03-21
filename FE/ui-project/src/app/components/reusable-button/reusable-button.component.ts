import { Component } from '@angular/core';
import * as singleSpa from 'single-spa';
import { AlertLibService } from 'alert-lib';
@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.scss',
})
export class ReusableButtonComponent {
  modalConfig: any;
  accordionData = [
    { title: 'Section 1', content: 'This is the content of section 1.' },
    { title: 'Section 2', content: 'This is the content of section 2.' },
    { title: 'Section 3', content: 'This is the content of section 3.' },
  ];

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

  //call this function to open modal
  openModal() {
    this.modalConfig = {
      modalTitle: 'Modal',
      dismissButtonLabel: 'Cancel',
      closeButtonLabel: 'OK',
      disableCloseButton: false,
      disableDismissButton: false,
      hideCloseButton: false,
      hideDismissButton: false,
    };
  }

  //call this function to close modal
  close(event: any) {
    if (event) {
      this.modalConfig = '';
    }
  }

  //call this function to save anything from modal
  show(event: any) {
    if (event) {
      this.modalConfig = '';
    }
  }

  moveToCms() {
    singleSpa.navigateToUrl('/cms');
  }
}
