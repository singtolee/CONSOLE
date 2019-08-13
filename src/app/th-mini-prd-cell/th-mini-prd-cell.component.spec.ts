import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThMiniPrdCellComponent } from './th-mini-prd-cell.component';

describe('ThMiniPrdCellComponent', () => {
  let component: ThMiniPrdCellComponent;
  let fixture: ComponentFixture<ThMiniPrdCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThMiniPrdCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThMiniPrdCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
