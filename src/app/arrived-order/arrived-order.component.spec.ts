import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivedOrderComponent } from './arrived-order.component';

describe('ArrivedOrderComponent', () => {
  let component: ArrivedOrderComponent;
  let fixture: ComponentFixture<ArrivedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
