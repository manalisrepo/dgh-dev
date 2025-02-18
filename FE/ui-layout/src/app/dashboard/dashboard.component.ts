import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private route: ActivatedRoute) {
    console.log(
      'DashboardComponent loaded with route:',
      this.route.snapshot.url
    );
  }
  sendMessageToFooter() {
    const event = new CustomEvent('footer-message', {
      detail: { message: 'Hello from Dashboard!' },
    });
    window.dispatchEvent(event);
  }
}
