import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBComponent } from './financial-b.component';

describe('FinancialBComponent', () => {
  let component: FinancialBComponent;
  let fixture: ComponentFixture<FinancialBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
