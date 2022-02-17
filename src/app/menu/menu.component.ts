import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from 'src/app/app.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
	activeLinkIndex = -1;
	navLinks: any[] = new Array<any>();

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe(
			() =>
				(this.activeLinkIndex = this.navLinks.indexOf(
					this.navLinks.find((tab) => tab.link === '.' + this.router.url)
				))
		);
	}

	title = 'Bomberos Los Patios';
	showFiller = false;
	therapies: Section[] = [
		{
			name: 'Inicio',
			updated: new Date('1/1/22'),
			icon: 'home',
			rute: ''
		},
		{
			name: 'Quienes Somos',
			updated: new Date('1/17/22'),
			icon: 'group',
			rute: ''
		},
		{
			name: 'Servicios',
			updated: new Date('1/28/22'),
			icon: 'fireplace',
			rute: ''
		},
		{
			name: 'PQRSD',
			updated: new Date('2/20/22'),
			icon: 'rate_review',
			rute: ''
		}
	];
	experience: Section[] = [
		{
			name: 'PQRSD',
			updated: new Date('2/20/22'),
			icon: 'rate_review',
			rute: ''
		}
	];
/* 	contact: Section[] = [
		{
			name: 'Desarrollo',
			updated: new Date('2/20/22'),
			icon: 'code',
			rute: ''
		}
	]; */

  hola(x: any) {
    console.log(x);
  }

  hola2(x: any) {
    console.log(x);
  }
}
