import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLibComponent } from './alert-lib.component';

describe('AlertLibComponent', () => {
  let component: AlertLibComponent;
  let fixture: ComponentFixture<AlertLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
