import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() closeFlyer = new EventEmitter<void>();

  loginForm: FormGroup;
  showPassword: boolean = false;
  showFlyer: boolean = false;

  captchaImage: string = '';
  captchaId: string = '';

  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      captcha: new FormControl('', [Validators.required]),
    });

    this.getCaptcha();
    setTimeout(() => {
      this.showFlyer = true;
    }, 10);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getCaptcha() {
    const url = 'http://192.168.0.75/login/getCaptcha';
    
    this.http.post<{ captchaImage: string; captchaId: string }>(url, {})
      .subscribe(
        (response) => {
          this.captchaImage = `data:image/png;base64,${response.captchaImage}`;
          this.captchaId = response.captchaId;
        },
        (error) => {
          console.error('Error fetching CAPTCHA:', error);
        }
      );
  
    this.loginForm.controls['captcha'].reset();
  }
  

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
      singleSpa.navigateToUrl('/project');
    } else {
      console.log('Invalid Credentials or Incorrect CAPTCHA');
    }
  }

  hideFlyer() {
    this.showFlyer = false;
    setTimeout(() => this.closeFlyer.emit(), 500);
  }
}
