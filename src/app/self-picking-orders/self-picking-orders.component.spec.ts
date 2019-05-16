import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPickingOrdersComponent } from './self-picking-orders.component';

describe('SelfPickingOrdersComponent', () => {
  let component: SelfPickingOrdersComponent;
  let fixture: ComponentFixture<SelfPickingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfPickingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfPickingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
