import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-input-password',
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {

  @Input() label: string = 'Password'; // Label for input
  @Input() placeholder: string = 'Enter your password'; // Placeholder text
  @Input() fieldName: string = 'password'; // Form control name
  @Input() group!: FormGroup; // Parent form group
  @Input() isRequired: boolean = false; // Required field flag
  @Input() disabled: boolean = false; // Disable input
  @Input() showTooltip: boolean = false; // Show tooltip
  @Input() tooltipText: string = ''; // Tooltip text
  @Input() errors: { type: string; message: string }[] = []; // Validation errors

  showPassword: boolean = false; // Toggle password visibility

  // Computed getter to access the form control
  get groupControl() {
    return this.group?.get(this.fieldName);
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Handle input events (optional)
  getValue(event: Event): void {
    console.log('Blur event:', (event.target as HTMLInputElement).value);
  }

  onInputChange(event: Event): void {
    console.log('Input changed:', (event.target as HTMLInputElement).value);
  }
}
