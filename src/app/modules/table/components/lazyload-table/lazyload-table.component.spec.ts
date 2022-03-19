import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadTableComponent } from './lazyload-table.component';

describe('LazyloadTableComponent', () => {
  let component: LazyloadTableComponent;
  let fixture: ComponentFixture<LazyloadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
