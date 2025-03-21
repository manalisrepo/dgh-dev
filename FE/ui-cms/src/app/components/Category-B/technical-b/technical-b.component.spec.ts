import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBComponent } from './technical-b.component';

describe('TechnicalBComponent', () => {
  let component: TechnicalBComponent;
  let fixture: ComponentFixture<TechnicalBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
