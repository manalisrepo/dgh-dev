import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLibComponent } from './accordion-lib.component';

describe('AccordionLibComponent', () => {
  let component: AccordionLibComponent;
  let fixture: ComponentFixture<AccordionLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
