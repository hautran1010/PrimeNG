import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReoderTableComponent } from './reoder-table.component';

describe('ReoderTableComponent', () => {
  let component: ReoderTableComponent;
  let fixture: ComponentFixture<ReoderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReoderTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReoderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
