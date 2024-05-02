import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-component',
  templateUrl: './sidenav-component.component.html',
  styleUrls: ['./sidenav-component.component.scss']
})
export class SidenavComponentComponent implements OnInit {
  topicos = ['Apresentação', 'Comitês', 'Autores', 'Eixos Temáticos', 'Trabalhos', 'Contato'];

  constructor() { }

  ngOnInit(): void {
  }

}
