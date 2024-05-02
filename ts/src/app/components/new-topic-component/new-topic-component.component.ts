import { Component, OnInit } from '@angular/core';
import { WaitingServiceService } from 'src/app/services/waiting-service.service';

@Component({
  selector: 'app-new-topic-component',
  templateUrl: './new-topic-component.component.html',
  styleUrls: ['./new-topic-component.component.scss']
})
export class NewTopicComponentComponent implements OnInit {
  showSentSuccessfully: boolean = false;

  constructor(private waitingService: WaitingServiceService) { }

  ngOnInit(): void {
  }

  validateNewTopic(): void {
    this.showSentSuccessfully = !this.showSentSuccessfully;
    this.waitingService.incrementWaitingCount();
  }

}
