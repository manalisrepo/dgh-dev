import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutLibComponent } from './flyout-lib.component';

describe('FlyoutLibComponent', () => {
  let component: FlyoutLibComponent;
  let fixture: ComponentFixture<FlyoutLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlyoutLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyoutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
