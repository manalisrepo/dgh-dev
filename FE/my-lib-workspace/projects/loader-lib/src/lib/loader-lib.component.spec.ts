import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderLibComponent } from './loader-lib.component';

describe('LoaderLibComponent', () => {
  let component: LoaderLibComponent;
  let fixture: ComponentFixture<LoaderLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
