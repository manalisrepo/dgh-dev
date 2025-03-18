import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAComponent } from './financial-a.component';

describe('FinancialAComponent', () => {
  let component: FinancialAComponent;
  let fixture: ComponentFixture<FinancialAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
