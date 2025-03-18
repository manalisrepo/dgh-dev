import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() group!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() placeholder: string = 'Select an option';
  // @Input() options: string[] | { value: string; label: string }[] = [];
  @Input() options: string[] = [];
  @Input() isOptionStringArray = true;
  @Input() isRequired = false;
  @Input() showTooltip = false;
  @Input() tooltipText!: string;
  @Input() disabled: boolean = false;
  @Input() errors: { type: string; message: string }[] = [];

  @Output() selectionChange = new EventEmitter<any>();

  @ViewChild('selectBox') selectBox: ElementRef | undefined;

  public selectedValue: string = '';
  private unsubscribe$ = new Subject<void>();

  constructor(private cd: ChangeDetectorRef) {}

  get groupControl(): AbstractControl | null {
    return this.group?.get(this.fieldName) || null;
  }

  isStringArray(): boolean {
    return this.options.length > 0 && typeof this.options[0] === 'string';
  }

  ngOnInit(): void {
    this.groupControl?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.updateSelectedValue(value);
      });

    this.updateSelectedValue(this.groupControl?.value);
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private updateSelectedValue(value: any): void {
    if (this.isOptionStringArray) {
      this.selectedValue = value || this.placeholder;
    }
    // else {
    //   const selected = this.options.find(
    //     (opt: any) => opt.value === value
    //   ) as { value: string; label: string };
    //   this.selectedValue = selected ? selected.label : this.placeholder;
    // }
  }

  public onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;

    this.groupControl?.setValue(value);
    this.selectionChange.emit(value);
  }
}
