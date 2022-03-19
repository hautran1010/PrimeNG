import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyamicTableComponent } from './dyamic-table.component';

describe('DyamicTableComponent', () => {
  let component: DyamicTableComponent;
  let fixture: ComponentFixture<DyamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyamicTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
