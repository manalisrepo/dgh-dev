import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLibComponent } from './button-lib.component';

describe('ButtonLibComponent', () => {
  let component: ButtonLibComponent;
  let fixture: ComponentFixture<ButtonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
