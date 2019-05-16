import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerryOrdersComponent } from './kerry-orders.component';

describe('KerryOrdersComponent', () => {
  let component: KerryOrdersComponent;
  let fixture: ComponentFixture<KerryOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerryOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerryOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
