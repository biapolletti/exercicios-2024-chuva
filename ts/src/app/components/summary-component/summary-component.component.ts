import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-component',
  templateUrl: './summary-component.component.html',
  styleUrls: ['./summary-component.component.scss']
})
export class SummaryComponentComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMore(): void {
    this.show = !this.show;
  }

}
