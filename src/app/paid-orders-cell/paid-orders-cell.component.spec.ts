import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidOrdersCellComponent } from './paid-orders-cell.component';

describe('PaidOrdersCellComponent', () => {
  let component: PaidOrdersCellComponent;
  let fixture: ComponentFixture<PaidOrdersCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidOrdersCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidOrdersCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
