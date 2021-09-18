import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListroommdiscussionComponent } from './listroommdiscussion.component';

describe('ListroommdiscussionComponent', () => {
  let component: ListroommdiscussionComponent;
  let fixture: ComponentFixture<ListroommdiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListroommdiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListroommdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
