import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopOutWindowComponent } from './pop-out-window.component';

describe('PopOutWindowComponent', () => {
  let component: PopOutWindowComponent;
  let fixture: ComponentFixture<PopOutWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopOutWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopOutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
