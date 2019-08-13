import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsOpenComponent } from './carts-open.component';

describe('CartsOpenComponent', () => {
  let component: CartsOpenComponent;
  let fixture: ComponentFixture<CartsOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
