import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import * as singleSpa from 'single-spa';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),

      transition(
        'hidden => visible',
        animate('0.9s cubic-bezier(0.16, 1, 0.3, 1)')
      ),
      transition(
        'visible => hidden',
        animate('0.7s cubic-bezier(0.4, 0, 0.6, 1)')
      ),
    ]),
  ],
})
export class LoginComponent {
  @Output() closeFlyer = new EventEmitter<void>();

  loginForm: FormGroup;
  showPassword: boolean = false;
  showFlyer: boolean = false;

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
    setTimeout(() => {
      this.showFlyer = true;
    }, 10);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  generateMathProblem() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;

    const operators = ['+', '-', '*'];
    this.operator = operators[Math.floor(Math.random() * operators.length)];

    switch (this.operator) {
      case '+':
        this.correctAnswer = this.num1 + this.num2;
        break;
      case '-':
        this.correctAnswer = this.num1 - this.num2;
        break;
      case '*':
        this.correctAnswer = this.num1 * this.num2;
        break;
    }

    this.loginForm.controls['captcha'].reset();
  }

  isAnswerCorrect(): boolean {
    const userAnswer = this.loginForm.controls['captcha'].value;
    return (
      userAnswer !== null && parseInt(userAnswer, 10) === this.correctAnswer
    );
  }

  onSubmit() {
    if (this.loginForm.valid && this.isAnswerCorrect()) {
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
