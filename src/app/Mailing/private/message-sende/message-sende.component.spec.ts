import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSendeComponent } from './message-sende.component';

describe('MessageSendeComponent', () => {
  let component: MessageSendeComponent;
  let fixture: ComponentFixture<MessageSendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageSendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
