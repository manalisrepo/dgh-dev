import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() label!: string;
  @Input() fieldName!: string;
  @Input() options: { value: any; label: string }[] = [];
  @Input() class: string = '';
  @Input() errors: { type: string; message: string }[] = [];
  @Input() isRequired: boolean = false;
  @Output() valueChange = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('Group:', this.group);
    console.log('Field Name:', this.fieldName);

    if (!this.group || !this.fieldName) {
      console.error(
        'FormGroup and fieldName are required in RadioGroupComponent!'
      );
      return;
    }

    const control = this.formControl;
    if (control) {
      const validators = [...(this.isRequired ? [Validators.required] : [])];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  get formControl(): AbstractControl | null {
    return this.group.get(this.fieldName);
  }

  onValueChange(value: any): void {
    this.valueChange.emit(value);
  }
}
