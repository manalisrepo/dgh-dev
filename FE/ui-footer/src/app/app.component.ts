import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  footerMessage: string = '';

  eventListener = (event: Event) => {
    const customEvent = event as CustomEvent;
    this.footerMessage = customEvent.detail.message;
  };

  ngOnInit() {
    window.addEventListener('footer-message', this.eventListener);
  }

  ngOnDestroy() {
    window.removeEventListener('footer-message', this.eventListener);
  }
}
