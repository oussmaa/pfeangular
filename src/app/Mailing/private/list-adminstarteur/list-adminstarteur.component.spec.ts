import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminstarteurComponent } from './list-adminstarteur.component';

describe('ListAdminstarteurComponent', () => {
  let component: ListAdminstarteurComponent;
  let fixture: ComponentFixture<ListAdminstarteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminstarteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminstarteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
