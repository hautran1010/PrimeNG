import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinecharComponent } from './linechar.component';

describe('LinecharComponent', () => {
  let component: LinecharComponent;
  let fixture: ComponentFixture<LinecharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinecharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
