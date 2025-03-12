import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Subject, first } from 'rxjs';
import * as singleSpa from 'single-spa';
import { EncryptService } from './shared/services/encrypt-services/encrypt.service';
import { LogoutService } from './shared/services/logout/logout.service';
import { RefreshtokenService } from './shared/services/refresh-token/refreshtoken.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'header';
  private subscriptionAlert!: Subscription;
  message: any;

  userActivity: any;
  confirmUserActivity: any;
  userInactive: Subject<any> = new Subject();
  idletimeout: number = 10 * 60;
  showIdlePopup: boolean = false;
  idleMessage = ''; //messages.userIdleMessage;
  idleTitle = ''; //messages.userIdleTitle;
  timerDuration: number = 10 * 60;
  timer: any;
  currentLink: any;
  minutes: number = 0;
  seconds: number = 0;
  sessionExpired: boolean = false;
  project: boolean = false;
  tokenRefreshTime = 600;
  constructor(
    private refreshtokenService: RefreshtokenService,
    private logoutService: LogoutService,
    private encryptService: EncryptService,
    //  private alertService:AlertService,
    private router: Router
  ) {
    if (sessionStorage.getItem('globalConfig')) {
      let strsglobalConfig = sessionStorage.getItem('globalConfig');
      let globalConfig = JSON.parse(
        this.encryptService.decrypt(strsglobalConfig) || ''
      );
      // if(globalConfig && globalConfig.ACCESS_TOKEN_REFRESH_INTERVAL!='')
      // {
      //   this.tokenRefreshTime=globalConfig.ACCESS_TOKEN_REFRESH_INTERVAL;

      // }
      if (globalConfig && globalConfig.SESSION_TIME_OUT_IN_SECONDS != 0) {
        this.idletimeout = globalConfig.SESSION_TIME_OUT_IN_SECONDS;
      }
    }

    // 👇️ call function every minutes set in environment variable
    setInterval(() => {
      this.refreshToken();
    }, 5 * 60000);

    // this.alertService.aClickedEvent
    // .subscribe((data) => {
    //   if(data==true)
    //   {
    //   this.resetTimeout();
    //   }
    //   });

    // this.subscriptionAlert = alertService.getMessage().subscribe(message => {
    //   this.message = message;
    // });
    this.userInactive.subscribe(() => {
      this.countDownTime();
      //this.alertService.success("Session Time Out");
    });
  }

  @HostListener('window:keyup', ['$event']) refreshUserStateKeyup(
    event: KeyboardEvent
  ) {
    if (!this.showIdlePopup && !this.sessionExpired) this.resetTimeout();
  }
  @HostListener('window:scroll', ['$event']) windowScroll(
    event: KeyboardEvent
  ) {
    if (!this.showIdlePopup && !this.sessionExpired) this.resetTimeout();
  }

  @HostListener('click') refreshUserStateClick() {
    if (!this.showIdlePopup && !this.sessionExpired) this.resetTimeout();
  }

  ngOnInit() {
    window.console.warn = function () {};
    window.console.debug = function () {};
    this.setTimeout();
    // this.userInactive.subscribe(() => {

    //    this.countDownTime();
    //    this.alertService.success("Session Time Out");

    // });
  }

  refreshToken() {
    this.refreshtokenService
      .refreshToken()
      .pipe(first())
      .subscribe({
        next: (tokens: any) => {
          if (tokens?.status == '1') {
            sessionStorage.setItem(
              'tokens',
              JSON.stringify(tokens.responseObject)
            );
          } else {
            setTimeout(() => {
              singleSpa.navigateToUrl('/');
            }, 200);
          }
        },
      });
    error: (error: any) => {
      if (error.status == 401) {
        singleSpa.navigateToUrl('/login');
      }
    };
  }

  resetTimeout() {
    this.clearCountDownTime();
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  setTimeout() {
    this.userActivity = setTimeout(
      () => this.userInactive.next(undefined),
      this.idletimeout * 1000
    );
  }

  countDownTime() {
    let duration = this.timerDuration;
    this.timer = setInterval(() => {
      if (duration == 0) {
        this.clearCountDownTime();
        this.autoLogout();
      } else {
        --duration;
        this.minutes = Math.floor(duration / 60);
        this.seconds = Math.floor(duration % 60);
        console.log('duration', duration);
      }
    }, 1000);
  }

  clearCountDownTime() {
    clearInterval(this.timer);
  }

  autoLogout() {
    if (sessionStorage.getItem('tokens')) {
      this.logoutService
        .logOut()
        .pipe(first())
        .subscribe({
          next: (data: any) => {
            localStorage.clear();
            sessionStorage.clear();
            singleSpa.navigateToUrl('/login');
          },
        });
    } else {
      localStorage.clear();
      sessionStorage.clear();
      singleSpa.navigateToUrl('/login');
    }
  }
}
