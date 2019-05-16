import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerryReadyOrdersComponent } from './kerry-ready-orders.component';

describe('KerryReadyOrdersComponent', () => {
  let component: KerryReadyOrdersComponent;
  let fixture: ComponentFixture<KerryReadyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerryReadyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerryReadyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
