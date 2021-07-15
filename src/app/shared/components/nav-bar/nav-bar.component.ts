import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  rute = 'assets/icons/';
  imgUrl = {
    homeIcon: `${this.rute}home_alt_outline.svg`,
    aboutUsIcon: `${this.rute}group.svg`,
    serviceIcon: `${this.rute}notification_outline_plus.svg`,
    pqrsdIcon: `${this.rute}message_plus_alt.svg`
  };
  logo = 'assets/img/logo/escudo_bomberos.png'
  navTitle = "BOMBEROS LOS PATIOS";

  constructor() { }

  ngOnInit(): void {

  }

}
