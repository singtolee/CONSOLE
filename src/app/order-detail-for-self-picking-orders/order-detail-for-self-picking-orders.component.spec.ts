import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForSelfPickingOrdersComponent } from './order-detail-for-self-picking-orders.component';

describe('OrderDetailForSelfPickingOrdersComponent', () => {
  let component: OrderDetailForSelfPickingOrdersComponent;
  let fixture: ComponentFixture<OrderDetailForSelfPickingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForSelfPickingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForSelfPickingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
