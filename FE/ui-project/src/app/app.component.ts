import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFlyerComponent } from './login-flyer/login-flyer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginFlyerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLogin = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }
}
