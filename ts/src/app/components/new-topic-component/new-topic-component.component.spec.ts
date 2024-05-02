import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopicComponentComponent } from './new-topic-component.component';

describe('NewTopicComponentComponent', () => {
  let component: NewTopicComponentComponent;
  let fixture: ComponentFixture<NewTopicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTopicComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTopicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
