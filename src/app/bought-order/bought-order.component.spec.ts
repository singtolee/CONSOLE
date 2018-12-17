import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtOrderComponent } from './bought-order.component';

describe('BoughtOrderComponent', () => {
  let component: BoughtOrderComponent;
  let fixture: ComponentFixture<BoughtOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
