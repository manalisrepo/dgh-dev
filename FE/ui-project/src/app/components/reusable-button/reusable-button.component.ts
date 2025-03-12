import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.scss',
})
export class ReusableButtonComponent {
  handleSubmit() {
    console.log('Submit clicked!');
  }

  handleCancel() {
    console.log('Cancel clicked!');
  }
}
