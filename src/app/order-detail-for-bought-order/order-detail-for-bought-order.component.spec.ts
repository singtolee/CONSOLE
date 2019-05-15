import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForBoughtOrderComponent } from './order-detail-for-bought-order.component';

describe('OrderDetailForBoughtOrderComponent', () => {
  let component: OrderDetailForBoughtOrderComponent;
  let fixture: ComponentFixture<OrderDetailForBoughtOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailForBoughtOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailForBoughtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
