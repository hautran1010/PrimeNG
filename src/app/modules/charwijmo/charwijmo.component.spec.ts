import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharwijmoComponent } from './charwijmo.component';

describe('CharwijmoComponent', () => {
  let component: CharwijmoComponent;
  let fixture: ComponentFixture<CharwijmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharwijmoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharwijmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
