import { Component } from '@angular/core';
import * as singleSpa from 'single-spa';
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

  logout() {
    singleSpa.navigateToUrl('/login');
  }
}
