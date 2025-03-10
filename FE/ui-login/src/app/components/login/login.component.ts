import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  correctAnswer: number = 0;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      captcha: new FormControl('', [Validators.required]),
    });
    this.generateMathProblem();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  generateMathProblem() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.correctAnswer = this.num1 + this.num2;
  }

  isAnswerCorrect(): boolean {
    return parseInt(this.loginForm.value.captcha, 10) === this.correctAnswer;
  }

  onSubmit() {
    if (this.loginForm.valid && this.isAnswerCorrect()) {
      console.log('Login Successful', this.loginForm.value);
    } else {
      console.log('Invalid Credentials or Incorrect CAPTCHA');
    }
  }
}
