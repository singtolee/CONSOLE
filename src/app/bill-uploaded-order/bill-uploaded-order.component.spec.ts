import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUploadedOrderComponent } from './bill-uploaded-order.component';

describe('BillUploadedOrderComponent', () => {
  let component: BillUploadedOrderComponent;
  let fixture: ComponentFixture<BillUploadedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillUploadedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillUploadedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
