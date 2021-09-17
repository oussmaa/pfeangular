import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjetComponent } from './prjet.component';

describe('PrjetComponent', () => {
  let component: PrjetComponent;
  let fixture: ComponentFixture<PrjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
