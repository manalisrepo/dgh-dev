import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'lib-flyout-lib',
  templateUrl: './flyout-lib.component.html',
  styleUrls: ['./flyout-lib.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(
        'hidden => visible',
        animate('0.9s cubic-bezier(0.16, 1, 0.3, 1)')
      ),
      transition(
        'visible => hidden',
        animate('0.7s cubic-bezier(0.4, 0, 0.6, 1)')
      ),
    ]),
  ],
})
export class FlyoutLibComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Flyout Panel';
  @Output() close = new EventEmitter<void>();

  closeFlyout() {
    this.isOpen = false;
    setTimeout(() => this.close.emit(), 500);
  }
}
