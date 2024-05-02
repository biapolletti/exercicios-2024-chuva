import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingFeedbackComponentComponent } from './waiting-feedback-component.component';

describe('WaitingFeedbackComponentComponent', () => {
  let component: WaitingFeedbackComponentComponent;
  let fixture: ComponentFixture<WaitingFeedbackComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingFeedbackComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingFeedbackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
