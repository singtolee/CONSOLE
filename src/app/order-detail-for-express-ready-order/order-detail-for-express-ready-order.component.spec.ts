import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForExpressReadyOrderComponent } from './order-detail-for-express-ready-order.component';

describe('OrderDetailForExpressReadyOrderComponent', () => {
  let component: OrderDetailForExpressReadyOrderComponent;
  let fixture: ComponentFixture<OrderDetailForExpressReadyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForExpressReadyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForExpressReadyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
