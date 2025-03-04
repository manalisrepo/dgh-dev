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
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() fieldName!: string;
  @Input() tooltipText: string = 'Enter a valid text';
  @Input() showTooltip: boolean = false;
  @Input() minlength: number = 0;
  @Input() placeholder: string = '';
  @Input() class: string = '';
  @Input() isRequired: boolean = false;
  @Input() errors: { type: string; message: string }[] = [];

  @Output() cstClick = new EventEmitter<string>();
  @Output() cstChange = new EventEmitter<string>();

  @ViewChild('tooltipTag') tooltipTag!: ElementRef;
  @ViewChild(MatTooltip) matTooltip!: MatTooltip;

  public placement: 'top' | 'bottom' = 'top';

  constructor() {}

  ngOnInit(): void {
    console.log('GROUP:', this.group);
    console.log('fieldNAME:', this.fieldName);

    if (!this.group || !this.fieldName) {
      console.error('FormGroup and fieldName are required in InputComponent!');
      return;
    }

    const control = this.groupControl;
    if (control) {
      const validators = [
        ...(this.minlength > 0 ? [Validators.minLength(this.minlength)] : []),
        Validators.maxLength(500),
        ...(this.isRequired ? [Validators.required] : []),
      ];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  get groupControl(): AbstractControl | null {
    const control = this.group?.get(this.fieldName);
    if (!control) {
      console.warn(`Control "${this.fieldName}" not found in FormGroup!`);
    }
    return control;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.cstChange.emit(target.value);
    }
  }

  onBlur(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.cstClick.emit(target.value);
    }
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(evt: MouseEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  showTooltipProgrammatically(): void {
    if (this.matTooltip) {
      this.matTooltip.show();
    }
  }

  public getValue(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.cstClick.emit(target.value);
    }
  }
}
