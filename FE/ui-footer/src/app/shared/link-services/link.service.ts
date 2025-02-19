import { Injectable,Output,EventEmitter } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { Router,NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  public showSearch   = true;
  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
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

  updateLink(link: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ currentLink: link });
  }

  currentSelection:BehaviorSubject<any> = new BehaviorSubject<any>(null);  
  headerText: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getCurrentLink(): Observable<any> {   
    return this.subject.asObservable();
  }
 
}
