import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  email: string = 'alguem12@galoascience.com';

  constructor() { }

  ngOnInit(): void {
  }

}
