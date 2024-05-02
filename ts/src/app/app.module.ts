import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponentComponent } from './components/sidenav-component/sidenav-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { DetailsComponentComponent } from './components/details-component/details-component.component';
import { SummaryComponentComponent } from './components/summary-component/summary-component.component';
import { DiscussionComponentComponent } from './components/discussion-component/discussion-component.component';
import { VideoComponentComponent } from './components/video-component/video-component.component';
import { AskComponentComponent } from './components/ask-component/ask-component.component';
import { NewTopicComponentComponent } from './components/new-topic-component/new-topic-component.component';
import { SentSuccessfullyComponentComponent } from './components/sent-successfully-component/sent-successfully-component.component';
import { WaitingFeedbackComponentComponent } from './components/waiting-feedback-component/waiting-feedback-component.component';
import { AnswerComponentComponent } from './components/answer-component/answer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponentComponent,
    HeaderComponentComponent,
    DetailsComponentComponent,
    SummaryComponentComponent,
    DiscussionComponentComponent,
    VideoComponentComponent,
    AskComponentComponent,
    NewTopicComponentComponent,
    SentSuccessfullyComponentComponent,
    NewTopicComponentComponent,
    WaitingFeedbackComponentComponent,
    AnswerComponentComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
