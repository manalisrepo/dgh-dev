import {
  Component,
  EventEmitter,
  Output,
  HostBinding,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-flyer',
  standalone: true,
  templateUrl: './login-flyer.component.html',
  styleUrls: ['./login-flyer.component.scss'],
  imports: [FormsModule],
})
export class LoginFlyerComponent implements OnInit {
  @Output() closeFlyer = new EventEmitter<void>();
  @HostBinding('class.open') isOpen = false;

  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  correctAnswer: number = 0;
  userAnswer: string = '';
  showPassword: boolean = false;

  ngOnInit() {
    this.generateMathProblem();
  }

  showFlyer() {
    this.isOpen = true;
  }

  hideFlyer() {
    this.isOpen = false;
    this.closeFlyer.emit();
  }

  generateMathProblem() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.operator = Math.random() > 0.5 ? '+' : '-';
    this.correctAnswer =
      this.operator === '+' ? this.num1 + this.num2 : this.num1 - this.num2;
    this.userAnswer = '';
  }

  isAnswerCorrect(): boolean {
    return parseInt(this.userAnswer, 10) === this.correctAnswer;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
