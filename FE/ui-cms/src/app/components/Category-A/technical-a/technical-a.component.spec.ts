import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalAComponent } from './technical-a.component';

describe('TechnicalAComponent', () => {
  let component: TechnicalAComponent;
  let fixture: ComponentFixture<TechnicalAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
