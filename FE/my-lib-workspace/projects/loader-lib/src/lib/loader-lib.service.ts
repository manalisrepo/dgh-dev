import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderLibService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
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
