import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next('');
        }
      }
    });
  }

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

  subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  showLoader(
    showLoader: boolean,
    loaderMsg: string,
    keepAfterNavigationChange = false
  ) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ showLoader: showLoader, loaderMsg: loaderMsg });
  }
  hideLoader() {
    this.subject.next('');
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
