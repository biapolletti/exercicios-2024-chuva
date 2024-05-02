import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskComponentComponent } from './ask-component.component';

describe('AskComponentComponent', () => {
  let component: AskComponentComponent;
  let fixture: ComponentFixture<AskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
