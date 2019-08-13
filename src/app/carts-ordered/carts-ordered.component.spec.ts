import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsOrderedComponent } from './carts-ordered.component';

describe('CartsOrderedComponent', () => {
  let component: CartsOrderedComponent;
  let fixture: ComponentFixture<CartsOrderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsOrderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
