import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ask-component',
  templateUrl: './ask-component.component.html',
  styleUrls: ['./ask-component.component.scss'],
  styles: ['.remove-border-margin { border-bottom-left-radius: 0; border-bottom-right-radius: 0; margin-bottom: 0; }']
})
export class AskComponentComponent implements OnInit {
  @Input() answerReceived: number = 1;

  likes: number = 1;
  showAnswers: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  like(): void {
    if (this.likes < 2) {
      this.likes++;
    } else {
      this.likes--;
    }
  }

  viewAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }
}
