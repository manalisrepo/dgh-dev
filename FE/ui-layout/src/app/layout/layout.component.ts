import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { navigateToUrl } from 'single-spa';

// declare global {
//   interface Window {
//     globalState: any;
//   }
// }

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpen = false;
  count = 0;
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  onButtonClicked() {
    const newCount = this.countSubject.value + 1;
    this.countSubject.next(newCount);
    window.dispatchEvent(
      new CustomEvent('buttonClicked', { detail: { count: newCount } })
    );
  }

  constructor() {
    console.log('Layout Component Loaded');
  }

  ngOnInit() {
    // this.waitForGlobalState();
  }

  // async waitForGlobalState() {
  //   let attempts = 0;
  //   while (!window.globalState && attempts < 10) { // Retry up to 10 times
  //     console.warn("⏳ Waiting for GlobalStateService...");
  //     await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
  //     attempts++;
  //   }

  //   if (window.globalState) {
  //     console.log("✅ GlobalStateService is available!");
  //     window.globalState.count$.subscribe((value: number) => {
  //       this.count = value;
  //       console.log('🔄 Count Updated in Layout:', value);
  //     });
  //   } else {
  //     console.error("❌ GlobalStateService is still not loaded after retries!");
  //   }
  // }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    const newCount = this.countSubject.value + 1;
    this.countSubject.next(newCount);
    window.dispatchEvent(
      new CustomEvent('buttonClicked', { detail: { count: newCount } })
    );
  }

  navigateToModules(val: string) {
    if (val === 'd') navigateToUrl('./dashboard');
    else if (val === 's') navigateToUrl('./settings');
  }

  handleClick() {
    const event = new CustomEvent('buttonClicked', {
      detail: { count: 1 },
    });

    window.dispatchEvent(event);
  }
}
