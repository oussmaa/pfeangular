import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavprivateComponent } from './navprivate.component';

describe('NavprivateComponent', () => {
  let component: NavprivateComponent;
  let fixture: ComponentFixture<NavprivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavprivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavprivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
