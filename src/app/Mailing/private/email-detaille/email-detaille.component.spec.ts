import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDetailleComponent } from './email-detaille.component';

describe('EmailDetailleComponent', () => {
  let component: EmailDetailleComponent;
  let fixture: ComponentFixture<EmailDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
