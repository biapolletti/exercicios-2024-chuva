import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss']
})
export class DetailsComponentComponent implements OnInit {
  authors = [
    { name: 'Galileo Galilei', id: 1},
    { name: 'Berta Lange de Morretes', id: 2},
    { name: 'Isaac Newton', id: 3},
    { name: 'Cesar Lattes', id: 1},
    { name: 'Stephen Hawking', id: 4},
  ]

  universities = [
    { name: 'Universidade Estadual de Campinas', id: 1 },
    { name: 'Universidade de São Paulo', id: 2 },
    { name: 'Instituto Nacional de Pesquisas Espaciais', id: 3 },
    { name: 'Universidade Federal do Rio de Janeiro', id: 4 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
