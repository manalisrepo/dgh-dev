import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLibComponent } from './modal-lib.component';

describe('ModalLibComponent', () => {
  let component: ModalLibComponent;
  let fixture: ComponentFixture<ModalLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
