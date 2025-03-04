import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() label: string = 'Number';
  @Input() fieldName!: string;
  @Input() tooltipText: string = 'Enter a valid number';
  @Input() showTooltip: boolean = false;
  @Input() placeholder: string = 'Enter a number';
  @Input() class: string = '';
  @Input() isRequired: boolean = false;
  @Input() errors: { type: string; message: string }[] = [];
  @Input() minNum: number = 0;
  @Input() maxNum: number = 100;
  @Input() step: number = 1;

  @Output() cstClick = new EventEmitter<number>();
  @Output() cstChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    if (!this.group || !this.fieldName) {
      console.error(
        'FormGroup and fieldName are required in InputNumberComponent!'
      );
      return;
    }

    const control = this.groupControl;
    if (control) {
      const validators = [
        Validators.min(this.minNum),
        Validators.max(this.maxNum),
        ...(this.isRequired ? [Validators.required] : []),
      ];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  get groupControl(): AbstractControl | null {
    return this.group?.get(this.fieldName) || null;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.groupControl?.setValue(value);
    this.cstChange.emit(value);
  }

  onBlur(event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.cstClick.emit(value);
  }

  up(): void {
    if (this.groupControl) {
      const newValue = Math.min(
        (this.groupControl.value || 0) + this.step,
        this.maxNum
      );
      this.groupControl.setValue(newValue);
      this.cstChange.emit(newValue);
    }
  }

  down(): void {
    if (this.groupControl) {
      const newValue = Math.max(
        (this.groupControl.value || 0) - this.step,
        this.minNum
      );
      this.groupControl.setValue(newValue);
      this.cstChange.emit(newValue);
    }
  }
}
