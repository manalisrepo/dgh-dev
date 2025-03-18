import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersAComponent } from './others-a.component';

describe('OthersAComponent', () => {
  let component: OthersAComponent;
  let fixture: ComponentFixture<OthersAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OthersAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OthersAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
