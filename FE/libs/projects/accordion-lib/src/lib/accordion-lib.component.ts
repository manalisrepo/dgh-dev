import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-accordionLib',
  templateUrl: './accordion-lib.component.html',
  styleUrl: './accordion-lib.component.scss',
})
export class AccordionLibComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
