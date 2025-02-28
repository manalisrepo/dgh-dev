import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertLibService } from './alert-lib.service';

@Component({
  selector: 'lib-alert-lib',
  standalone: false,
  templateUrl: './alert-lib.component.html',
  styleUrl: './alert-lib.component.scss',
})
export class AlertLibComponent {
  status: any;

  message: any;
  private subscription: Subscription;

  constructor(private alertService: AlertLibService) {
    // subscribe to alert messages
    this.subscription = alertService.getMessage().subscribe((message: any) => {
      this.message = message;
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
  closeMessage() {
    this.alertService.clearAlertMessage();
  }
}
