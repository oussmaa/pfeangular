import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailComponent } from './sendmail.component';

describe('SendmailComponent', () => {
  let component: SendmailComponent;
  let fixture: ComponentFixture<SendmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
