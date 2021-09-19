import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisieroomComponent } from './choisieroom.component';

describe('ChoisieroomComponent', () => {
  let component: ChoisieroomComponent;
  let fixture: ComponentFixture<ChoisieroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisieroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisieroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
