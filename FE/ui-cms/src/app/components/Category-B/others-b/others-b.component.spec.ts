import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersBComponent } from './others-b.component';

describe('OthersBComponent', () => {
  let component: OthersBComponent;
  let fixture: ComponentFixture<OthersBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OthersBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OthersBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
