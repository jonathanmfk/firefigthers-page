import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
	imgCarousel: any[];
	ruth: string;

	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [ 1055, 194, 368 ].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor() {
		// customize default values of carousels used by this component tree
		this.ruth = 'assets/img/carousel/img_carousel_';
		this.imgCarousel = [
			{ img: `${this.ruth}01.jpg` },
			{ img: `${this.ruth}02.jpg` },
			{ img: `${this.ruth}03.jpg` },
			{ img: `${this.ruth}04.jpg` },
			{ img: `${this.ruth}05.jpg` },
			{ img: `${this.ruth}06.jpg` },
			{ img: `${this.ruth}07.jpg` },
			{ img: `${this.ruth}08.jpg` }
			/* { img: `${this.ruth}01` },
			{ img: `${this.ruth}02` },
			{ img: `${this.ruth}03` },
			{ img: `${this.ruth}04` }, */
		];
	}

	ngOnInit(): void {}
}
