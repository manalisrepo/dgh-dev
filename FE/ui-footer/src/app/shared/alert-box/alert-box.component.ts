import { Component, OnInit, Input} from '@angular/core';

import { AlertService } from '../alert-box-services/alert.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {
  @Input() minutes!:number;
  @Input() seconds!:number;
  status:any;

  message: any;
  private subscription: Subscription;

  constructor(private alertService:AlertService )
  {
 // subscribe to alert messages
 this.subscription = alertService.getMessage().subscribe(message => {
  this.message = message;
});
  }

  getCDNUrl(urlPart:any)
  {
    return environment.cdnUrl+urlPart;
  }

  ngOnInit() {    
  }
  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
  closeMessage(isOkclicked:boolean) {
    this.alertService.clearAlertMessage();    
    this.alertService.isOkClicked(isOkclicked);
  } 
}
