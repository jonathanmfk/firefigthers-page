import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  ruth = 'assets/icons/';
  imgUrl = {
    homeIcon: `${this.ruth}home_alt_outline.svg`,
    serviceIcon: `${this.ruth}notification_outline_plus.svg`,
    aboutUsIcon: `${this.ruth}group.svg`,
    pqrsdIcon: `${this.ruth}message_plus_alt.svg`
  };
  logo = 'assets/img/logo/escudo_bomberos.png'
  navTitle = "BOMBEROS LOS PATIOS";

  constructor() { }

  ngOnInit(): void {

  }

}
