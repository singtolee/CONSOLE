import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTableViewComponent } from './package-table-view.component';

describe('PackageTableViewComponent', () => {
  let component: PackageTableViewComponent;
  let fixture: ComponentFixture<PackageTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
