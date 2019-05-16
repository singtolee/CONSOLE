import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReadyForDeliveryComponent } from './orders-ready-for-delivery.component';

describe('OrdersReadyForDeliveryComponent', () => {
  let component: OrdersReadyForDeliveryComponent;
  let fixture: ComponentFixture<OrdersReadyForDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersReadyForDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersReadyForDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
