import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForPaidOrderComponent } from './order-detail-for-paid-order.component';

describe('OrderDetailForPaidOrderComponent', () => {
  let component: OrderDetailForPaidOrderComponent;
  let fixture: ComponentFixture<OrderDetailForPaidOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForPaidOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForPaidOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
