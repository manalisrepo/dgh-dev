import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-buttonLib',
  templateUrl: './button-lib.component.html',
  styleUrl: './button-lib.component.scss',
})
export class ButtonLibComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'button' | 'submit' | 'forward' = 'button';
  @Input() color: string = 'btn-primary'; // Bootstrap class
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;

  // Output event for click
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }

  getSize(): string {
    switch (this.size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      default:
        return '';
    }
  }
}
