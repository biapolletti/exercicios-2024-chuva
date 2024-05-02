import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentSuccessfullyComponentComponent } from './sent-successfully-component.component';

describe('SentSuccessfullyComponentComponent', () => {
  let component: SentSuccessfullyComponentComponent;
  let fixture: ComponentFixture<SentSuccessfullyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentSuccessfullyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentSuccessfullyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
