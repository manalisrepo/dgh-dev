import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibDemoComponent } from './my-lib-demo.component';

describe('MyLibDemoComponent', () => {
  let component: MyLibDemoComponent;
  let fixture: ComponentFixture<MyLibDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyLibDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyLibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
