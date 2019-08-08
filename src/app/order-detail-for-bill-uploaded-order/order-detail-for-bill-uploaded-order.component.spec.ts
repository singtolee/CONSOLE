import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForBillUploadedOrderComponent } from './order-detail-for-bill-uploaded-order.component';

describe('OrderDetailForBillUploadedOrderComponent', () => {
  let component: OrderDetailForBillUploadedOrderComponent;
  let fixture: ComponentFixture<OrderDetailForBillUploadedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForBillUploadedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForBillUploadedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
