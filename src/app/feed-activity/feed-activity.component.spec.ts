import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedActivityComponent } from './feed-activity.component';

describe('FeedActivityComponent', () => {
  let component: FeedActivityComponent;
  let fixture: ComponentFixture<FeedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedActivityComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
