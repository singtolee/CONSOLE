import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForNewOrderComponent } from './order-detail-for-new-order.component';

describe('OrderDetailForNewOrderComponent', () => {
  let component: OrderDetailForNewOrderComponent;
  let fixture: ComponentFixture<OrderDetailForNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
