import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForDoneOrderComponent } from './order-detail-for-done-order.component';

describe('OrderDetailForDoneOrderComponent', () => {
  let component: OrderDetailForDoneOrderComponent;
  let fixture: ComponentFixture<OrderDetailForDoneOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForDoneOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForDoneOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
