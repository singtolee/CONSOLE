import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForSelfPickingReadyOrderComponent } from './order-detail-for-self-picking-ready-order.component';

describe('OrderDetailForSelfPickingReadyOrderComponent', () => {
  let component: OrderDetailForSelfPickingReadyOrderComponent;
  let fixture: ComponentFixture<OrderDetailForSelfPickingReadyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForSelfPickingReadyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForSelfPickingReadyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
