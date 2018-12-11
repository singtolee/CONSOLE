import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPrdCellComponent } from './mini-prd-cell.component';

describe('MiniPrdCellComponent', () => {
  let component: MiniPrdCellComponent;
  let fixture: ComponentFixture<MiniPrdCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPrdCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPrdCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
