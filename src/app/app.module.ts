import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedActivityListComponent } from './feed-activity-list/feed-activity-list.component';
import { FeedActivityComponent } from './feed-activity/feed-activity.component';
import { StreamService } from './stream.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedActivityListComponent,
    FeedActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
