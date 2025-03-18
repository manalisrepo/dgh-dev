import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-login';
  showLogin = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }
}
