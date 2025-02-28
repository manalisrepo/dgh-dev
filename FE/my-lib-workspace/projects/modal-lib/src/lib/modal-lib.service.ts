import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalLibService {
  private modals: any[] = [];

  constructor() {}

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
    this.open(modal?.id);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.close();
  }
}
