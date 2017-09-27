import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedActivityComponent } from '../feed-activity/feed-activity.component';
import { FeedActivityListComponent } from './feed-activity-list.component';
import { StreamService } from '../stream.service';

describe('FeedActivityListComponent', () => {
  let component: FeedActivityListComponent;
  let fixture: ComponentFixture<FeedActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedActivityComponent,
        FeedActivityListComponent
      ],
      providers: [ StreamService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
