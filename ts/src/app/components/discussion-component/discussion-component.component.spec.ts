import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionComponentComponent } from './discussion-component.component';

describe('DiscussionComponentComponent', () => {
  let component: DiscussionComponentComponent;
  let fixture: ComponentFixture<DiscussionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
