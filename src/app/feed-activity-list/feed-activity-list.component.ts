import { Component, OnInit } from '@angular/core';

import { StreamService } from '../stream.service';
import { StreamActivity } from '../stream-activity.model';

@Component({
  selector: 'app-feed-activity-list',
  templateUrl: './feed-activity-list.component.html',
  styleUrls: ['./feed-activity-list.component.scss']
})
export class FeedActivityListComponent implements OnInit {
  activities: StreamActivity[] = [];

  constructor(
    private streamClient: StreamService
  ) { }

  ngOnInit() {
      this.streamClient.getFeed().then(activities => {
        console.log('Service promise resolved: ', activities);
        this.activities = activities;
      });
  }

}
