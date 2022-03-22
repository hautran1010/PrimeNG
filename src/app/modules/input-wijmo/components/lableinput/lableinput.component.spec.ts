import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LableinputComponent } from './lableinput.component';

describe('LableinputComponent', () => {
  let component: LableinputComponent;
  let fixture: ComponentFixture<LableinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LableinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LableinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
