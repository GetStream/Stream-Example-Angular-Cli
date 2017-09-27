import { Component, Input, OnInit } from '@angular/core';

import { StreamActivity } from '../stream-activity.model';

@Component({
  selector: 'app-feed-activity',
  templateUrl: './feed-activity.component.html',
  styleUrls: ['./feed-activity.component.scss']
})
export class FeedActivityComponent implements OnInit {
  @Input() activity: StreamActivity = new StreamActivity();

  constructor() { }

  ngOnInit() {
  }

}
