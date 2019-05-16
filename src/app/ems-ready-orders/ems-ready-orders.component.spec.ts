import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsReadyOrdersComponent } from './ems-ready-orders.component';

describe('EmsReadyOrdersComponent', () => {
  let component: EmsReadyOrdersComponent;
  let fixture: ComponentFixture<EmsReadyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmsReadyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsReadyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
