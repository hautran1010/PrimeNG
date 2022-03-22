import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectcontrolComponent } from './multi-selectcontrol.component';

describe('MultiSelectcontrolComponent', () => {
  let component: MultiSelectcontrolComponent;
  let fixture: ComponentFixture<MultiSelectcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
