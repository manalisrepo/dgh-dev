import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() label: string = '';
  @Input() fieldName!: string;
  @Input() tooltipText: string = 'Check to accept';
  @Input() showTooltip: boolean = false;
  @Input() class: string = '';
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() errors: { type: string; message: string }[] = [];

  @Output() checkChange = new EventEmitter<boolean>();

  @ViewChild('tooltipTag') tooltipTag!: ElementRef;
  @ViewChild(MatTooltip) matTooltip!: MatTooltip;

  constructor() {}

  ngOnInit(): void {
    console.log('Group:', this.group);
    console.log('Field Name:', this.fieldName);

    if (!this.group || !this.fieldName) {
      console.error(
        'FormGroup and fieldName are required in CheckboxComponent!'
      );
      return;
    }

    const control = this.formControl;
    if (control) {
      const validators = [
        ...(this.isRequired ? [Validators.requiredTrue] : []),
      ];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  get formControl(): AbstractControl | null {
    const control = this.group?.get(this.fieldName);
    if (!control) {
      console.warn(`Control "${this.fieldName}" not found in FormGroup!`);
    }
    return control;
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checkChange.emit(target.checked);
  }

  showTooltipProgrammatically(): void {
    if (this.matTooltip) {
      this.matTooltip.show();
    }
  }
}
