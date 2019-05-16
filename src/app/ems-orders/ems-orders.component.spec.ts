import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsOrdersComponent } from './ems-orders.component';

describe('EmsOrdersComponent', () => {
  let component: EmsOrdersComponent;
  let fixture: ComponentFixture<EmsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
