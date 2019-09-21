import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPackagesCellComponent } from './order-packages-cell.component';

describe('OrderPackagesCellComponent', () => {
  let component: OrderPackagesCellComponent;
  let fixture: ComponentFixture<OrderPackagesCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPackagesCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPackagesCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
