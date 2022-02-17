import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent implements OnInit {
	@Output() buttonMenu = new EventEmitter();

	activeLinkIndex = -1;
	//navLinks: any[];
	readonly logo = 'assets/img/logo/escudo_bomberos.png';
	readonly titleNav = 'BOMBEROS LOS PATIOS';
	ruth: any;

	constructor(private router: Router) {
		/* this.ruth = 'assets/icons/';
		this.navLinks = [
			{
				icon: `${this.ruth}home_alt_outline.svg`,
				link: `./inicio`,
				textAlt: `Home`,
				textTip: `Inicio`
			},
			{
				icon: `${this.ruth}notification_outline_plus.svg`,
				link: `./servicios`,
				textAlt: `Our Services`,
				textTip: `Nuestros Servicios`
			},
			{
				icon: `${this.ruth}group.svg`,
				link: `./nosotros`,
				textAlt: `About Us`,
				textTip: `Sobre Nosotros`
			},
			{
				icon: `${this.ruth}message_plus_alt.svg`,
				link: `./pqrsd`,
				textAlt: `PQRSD`,
				textTip: `PQRSD`
			}
		]; */
	}

	openDrawer() {
		this.buttonMenu.emit();
	}

	ngOnInit(): void {}
}
