import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showLogin = false;

  toggleLogin() {
    if (!this.showLogin) {
      setTimeout(() => {
        this.showLogin = true;
      }, 50);
    } else {
      this.showLogin = false;
    }
  }
}
