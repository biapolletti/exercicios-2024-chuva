import { Component, OnInit } from '@angular/core';
import { WaitingServiceService } from 'src/app/services/waiting-service.service';

@Component({
  selector: 'app-waiting-feedback-component',
  templateUrl: './waiting-feedback-component.component.html',
  styleUrls: ['./waiting-feedback-component.component.scss']
})
export class WaitingFeedbackComponentComponent implements OnInit {

  constructor(private waitingService: WaitingServiceService) { }

  ngOnInit(): void {
  }

  editTopic(): void {
    this.waitingService.decrementWaitingCount();
  }

}
