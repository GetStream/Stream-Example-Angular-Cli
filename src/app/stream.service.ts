import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import * as stream from 'getstream';
import { StreamActivity } from './stream-activity.model';

@Injectable()
export class StreamService {
  client: stream.Client;

  constructor() {
    // Instantiate a new client (client side)
    this.client = stream.connect(
      environment.STREAM_APP_KEY,
      null,
      environment.STREAM_APP_ID);
  }

  getFeed(): Promise<StreamActivity[]> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(
      environment.STREAM_FEED_GROUP,
      environment.STREAM_FEED_ID,
      environment.STREAM_FEED_READ_ONLY_TOKEN);

    // Fetch the feed and pick the results property off the response object
    return feed.get().then(response => response['results']);
  }
}
