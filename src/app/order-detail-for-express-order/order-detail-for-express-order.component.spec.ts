import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForExpressOrderComponent } from './order-detail-for-express-order.component';

describe('OrderDetailForExpressOrderComponent', () => {
  let component: OrderDetailForExpressOrderComponent;
  let fixture: ComponentFixture<OrderDetailForExpressOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForExpressOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForExpressOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
