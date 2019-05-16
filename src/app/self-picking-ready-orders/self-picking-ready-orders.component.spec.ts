import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPickingReadyOrdersComponent } from './self-picking-ready-orders.component';

describe('SelfPickingReadyOrdersComponent', () => {
  let component: SelfPickingReadyOrdersComponent;
  let fixture: ComponentFixture<SelfPickingReadyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfPickingReadyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfPickingReadyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
