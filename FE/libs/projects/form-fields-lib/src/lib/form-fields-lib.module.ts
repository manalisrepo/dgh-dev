import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { InputComponent } from './components/input/input.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TextareaComponent } from './components/textarea/textarea.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { CheckboxComponent } from './components/form-checkbox/form-checkbox.component';


@NgModule({
  declarations: [
    InputComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputPasswordComponent,
    FormSelectComponent,
    TextareaComponent,
    RadioGroupComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatOptionModule,
    MatOption,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputPasswordComponent,
    FormSelectComponent,
    MatTooltipModule,
    MatIconModule,
    MatOptionModule,
    MatOption,
    TextareaComponent,
    RadioGroupComponent,
    CheckboxComponent,
  ],
})
export class FormFieldsLibModule {}
