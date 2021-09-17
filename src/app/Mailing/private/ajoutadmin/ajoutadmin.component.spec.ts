import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutadminComponent } from './ajoutadmin.component';

describe('AjoutadminComponent', () => {
  let component: AjoutadminComponent;
  let fixture: ComponentFixture<AjoutadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
