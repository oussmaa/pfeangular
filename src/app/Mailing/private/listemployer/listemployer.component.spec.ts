import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployerComponent } from './listemployer.component';

describe('ListemployerComponent', () => {
  let component: ListemployerComponent;
  let fixture: ComponentFixture<ListemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
