import { Component, OnInit } from '@angular/core';
import { WaitingServiceService } from 'src/app/services/waiting-service.service';

@Component({
  selector: 'app-discussion-component',
  templateUrl: './discussion-component.component.html',
  styleUrls: ['./discussion-component.component.scss']
})
export class DiscussionComponentComponent implements OnInit {
  answer = 4;
  showCreateNewTopic: boolean = false;
  waitingCount: number = 0;

  constructor(private waitingService: WaitingServiceService) { }

  ngOnInit(): void {
    this.waitingService.getWaitingCount().subscribe(count => {
      this.waitingCount = count;
    });
  }

  createNewTopic(): void {
    this.showCreateNewTopic = !this.showCreateNewTopic;
  }
}
