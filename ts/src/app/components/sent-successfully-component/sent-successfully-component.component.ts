import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-successfully-component',
  templateUrl: './sent-successfully-component.component.html',
  styleUrls: ['./sent-successfully-component.component.scss']
})
export class SentSuccessfullyComponentComponent implements OnInit {
  showNewTopic: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  createNewTopic(): void {
    this.showNewTopic = !this.showNewTopic;
  }

}
