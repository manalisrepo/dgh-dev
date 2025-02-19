import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as singleSpa from 'single-spa';
import { Subscription, Subject, first } from 'rxjs';
import { AlertService } from './shared/alert-box-services/alert.service';
import { EncryptService } from './shared/services/encrypt-services/encrypt.service';
import { LogoutService } from './shared/services/logout/logout.service';
import { RefreshtokenService } from './shared/services/refresh-token/refreshtoken.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'header';
  private subscriptionAlert: Subscription;
  message: any;

  userActivity:any;
  confirmUserActivity:any;
  userInactive: Subject<any> = new Subject();
  idletimeout: number = 10 * 60;
  showIdlePopup: boolean = false;
  idleMessage = "";//messages.userIdleMessage;
  idleTitle = "";//messages.userIdleTitle;
  timerDuration: number = 10 * 60;
  timer:any;
  currentLink:any;
  minutes: number = 0;
  seconds: number = 0;
  sessionExpired: boolean = false;
  project: boolean = false;
  tokenRefreshTime=600;
 constructor(private refreshtokenService:RefreshtokenService,
             private logoutService:LogoutService,
             private encryptService:EncryptService,
             private alertService:AlertService,private router:Router,
             ){
              
              if(sessionStorage.getItem('globalConfig'))
              {
              
                let strsglobalConfig=sessionStorage.getItem('globalConfig');
                let globalConfig= JSON.parse(this.encryptService.decrypt(strsglobalConfig)||'');
                if(globalConfig && globalConfig.ACCESS_TOKEN_REFRESH_INTERVAL!='')
                {
                  this.tokenRefreshTime=globalConfig.ACCESS_TOKEN_REFRESH_INTERVAL;
                  
                }
                if(globalConfig && globalConfig.SESSION_TIME_OUT_IN_SECONDS!=0)
                {
                  this.idletimeout=globalConfig.SESSION_TIME_OUT_IN_SECONDS;
                }
                
              }

  // 👇️ call function every minutes set in environment variable
setInterval(() => {
      this.refreshToken();
    }, 5*60000);

    this.alertService.aClickedEvent
    .subscribe((data) => {
      if(data==true)
      {
      this.resetTimeout();
      this.clearCountDownTime();
      }
      });

      this.subscriptionAlert = alertService.getMessage().subscribe(message => {
        this.message = message;
      });
 }

 ngOnInit() {
  // window.console.log = function (){}
  // window.console.error = function (){}
  // window.console.info = function (){}
  // window.console.table = function (){}
  // window.console.clear = function (){}
  window.console.warn = function () { }
  window.console.debug = function () { }
  this.setTimeout();
  this.userInactive.subscribe(() => {
    //// if (this.authService.isLoggedIn()) {
     //this.openIdlePopup()
     this.countDownTime();
     this.alertService.success("Session Time Out");

    // }
    // else {
    //   this.resetTimeout()
    //   this.hideIdlePopup()
    // }
  });
  // this.copyRightDate();
}

 refreshToken(){
  this.refreshtokenService.refreshToken()
  .pipe(first())
  .subscribe({
    next: (tokens) => {
      if(tokens.status=='1'){
        sessionStorage.setItem("tokens", JSON.stringify(tokens.responseObject));
      }else{
        setTimeout(() => {
          singleSpa.navigateToUrl('/');
        }, 200);
      }
     
    }
  })
  error:(error:any)=>{
    if(error.status==401)
    {
      singleSpa.navigateToUrl('/login')
    }
  };
 }

 @HostListener('window:keyup', ['$event']) refreshUserStateKeyup(event: KeyboardEvent) {
  if (!this.showIdlePopup && !this.sessionExpired)
    this.resetTimeout()
}
@HostListener('window:scroll', ['$event']) windowScroll(event: KeyboardEvent) {
  if (!this.showIdlePopup && !this.sessionExpired)
    this.resetTimeout()
}

@HostListener('click') refreshUserStateClick() {
  if (!this.showIdlePopup && !this.sessionExpired)
    this.resetTimeout();
}

resetTimeout() {
 
  this.clearCountDownTime()
  clearTimeout(this.userActivity);
  this.setTimeout();
}

setTimeout() {
  this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.idletimeout *1000);
}

countDownTime() {
  // let soundActiveDetails = ''
  // var sound = new Howl({
  //   src: ["../assets/sound/sound2.wav"],
  //   volume: 1
  // });
  // let reqBody = {
  //   "flag":"IS_SOUND_NOTIFICATION_APPLICABLE",
  //   "text1":""
  // }
  // this.authService.getSystemConfgurations(reqBody).subscribe(res => {
  //   soundActiveDetails = res['configurations'][0].value
  //   if(soundActiveDetails === 'Y'){
  //     // console.log('====> : ',res)
  //     sound.play();
  //   }
  // })
  
  
  
  let duration = this.timerDuration
  this.timer = setInterval(() => {
    if (duration == 0) {
      this.clearCountDownTime();
      this.autoLogout();
    }
    else {
      --duration;
      this.minutes = Math.floor(duration / 60);
      this.seconds = Math.floor(duration % 60);
      // if(this.minutes == 5 && this.seconds == 0){
      //   if(soundActiveDetails === 'Y'){
      //     sound.play();
      //   }
      // } else if (this.minutes == 1 && this.seconds == 0){
      //   if(soundActiveDetails === 'Y'){
      //     sound.play();
      //   }
      // }
      console.log("duration",duration);
    }
  }, 1000)
}

clearCountDownTime() {
  clearInterval(this.timer)
}

autoLogout() {
  
  if(sessionStorage.getItem('tokens'))
  {
  this.logoutService.logOut()
    .pipe(first())
    .subscribe({
      next: (data) => {        
    localStorage.clear();
    sessionStorage.clear();
    singleSpa.navigateToUrl('/login')
      }
    });
  }
  else
  {
    localStorage.clear();
    sessionStorage.clear();
    singleSpa.navigateToUrl('/login')
  }
}

openIdlePopup() {
  this.showIdlePopup = true;
  this.countDownTime();
}
hideIdlePopup() {
  this.showIdlePopup = false;
  this.clearCountDownTime();
}
 redirectToAnotherModule(url: any) {
  
    singleSpa.navigateToUrl('/' + url);
    if(url=='project'){
    
    }
  }

  nevigate(url:string){    
    this.project=false
    this.router.navigate(['/new/'+url]);
      }
}
