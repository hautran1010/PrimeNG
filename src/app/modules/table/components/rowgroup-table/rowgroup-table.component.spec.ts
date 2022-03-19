import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowgroupTableComponent } from './rowgroup-table.component';

describe('RowgroupTableComponent', () => {
  let component: RowgroupTableComponent;
  let fixture: ComponentFixture<RowgroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowgroupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowgroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
