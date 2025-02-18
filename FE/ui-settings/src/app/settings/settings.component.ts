import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  count = 0;

  private listener!: (event: any) => void;

  ngOnInit() {
    this.listener = (event: any) => {
      const { count } = event.detail;
      console.log('Received count:', count);
      this.updateState(count);
    };

    window.addEventListener('buttonClicked', this.listener);
  }

  updateState(count: number) {
    this.count = count;
  }

  ngOnDestroy() {
    window.removeEventListener('buttonClicked', this.listener);
  }
}
