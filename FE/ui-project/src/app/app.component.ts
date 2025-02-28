import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { AlertLibService } from 'alert-lib';

import { LoaderLibService } from 'loader-lib';
import { ModalLibService } from 'modal-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'ui-project';
  modalConfig: any;
  id = '';

  constructor(
    private modalService: ModalService,
    private modalLibService: ModalLibService,
    private alertService: AlertLibService,
    private loaderService: LoaderLibService
  ) {}
  ngOnInit(): void {}

  //  call this function to open modal by passing modal id
  openModal(id: string) {
    this.loaderService.showLoader(true, 'Saving....');
    this.modalConfig = {
      modalTitle: 'alert',
      dismissButtonLabel: 'Cancel',
      closeButtonLabel: 'OK',
      disableCloseButton: false,
      disableDismissButton: false,
      hideCloseButton: false,
      hideDismissButton: false,
    };
    this.id = id;
    this.modalLibService.open(id);
  }

  // just call this function to close modal by passing modal id
  closeModal(id: string) {
    this.modalConfig = '';
    this.id = '';
    this.modalLibService.close(id);
  }

  alertOpen() {
    this.loaderService.hideLoader();
    this.alertService.info(
      'For first time data update for migrated users, once you save the field level information on the form, it cannot be edited further. If you need to make further changes, you can do so through separate project update service subsequently.'
    );
  }

  show(event: any) {
    this.modalLibService.close(this.id);
    this.modalConfig = '';
    this.id = '';
    console.log(event);
  }
}
