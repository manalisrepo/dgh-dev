import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() label: string = 'Email';
  @Input() fieldName!: string;
  @Input() tooltipText: string = 'Enter a valid email';
  @Input() showTooltip: boolean = false;
  @Input() placeholder: string = 'Enter your email';
  @Input() class: string = '';
  @Input() isRequired: boolean = false;
  @Input() errors: { type: string; message: string }[] = [];
  @Input() disabled: boolean = false;

  @Output() cstClick = new EventEmitter<string>();
  @Output() cstChange = new EventEmitter<string>();

  @ViewChild('tooltipTag') tooltipTag!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('Group ', this.group);
    console.log('fieldName ', this.fieldName);
    if (!this.group || !this.fieldName) {
      console.error(
        'FormGroup and fieldName are required in InputEmailComponent!'
      );
      return;
    }

    const control = this.groupControl;
    if (control) {
      const validators = [
        Validators.email,
        Validators.maxLength(80),
        ...(this.isRequired ? [Validators.required] : []),
      ];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  get groupControl(): AbstractControl | null {
    return this.group?.get(this.fieldName) || null;
  }

  getValue(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.cstClick.emit(target.value);
    }
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.cstChange.emit(value);
  }
}
