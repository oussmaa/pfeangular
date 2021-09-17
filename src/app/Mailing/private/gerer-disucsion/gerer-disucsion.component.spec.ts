import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererDisucsionComponent } from './gerer-disucsion.component';

describe('GererDisucsionComponent', () => {
  let component: GererDisucsionComponent;
  let fixture: ComponentFixture<GererDisucsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererDisucsionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererDisucsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
