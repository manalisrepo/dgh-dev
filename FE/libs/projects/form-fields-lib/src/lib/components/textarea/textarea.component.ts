import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() public label!: string;
  @Input() public fieldName!: string;
  @Input() public tooltipText!: string;
  @Input() public showTooltip = false;
  @Input() public placeholder!: string;
  @Input() public isRequired = false;
  @Input() public errors: { type: string; message: string }[] = [];
  @Output() public cstClick = new EventEmitter();
  @Output() public cstChange = new EventEmitter();

  ngOnInit(): void {
    const validators = [Validators.minLength(0), Validators.maxLength(1000)];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    this.groupControl?.setValidators(validators);
    this.groupControl?.updateValueAndValidity();
  }

  get groupControl(): AbstractControl | null {
    return this.group.get(this.fieldName);
  }

  public getValue(e: Event) {
    this.cstClick.emit((e.target as HTMLTextAreaElement).value);
  }

  public onChange(e: Event) {
    this.cstChange.emit((e.target as HTMLTextAreaElement).value);
  }
}
