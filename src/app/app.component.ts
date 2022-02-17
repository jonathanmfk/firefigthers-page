import { Component } from '@angular/core';

export interface Section {
	name: string;
	updated: Date;
  icon: string;
  rute: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firefigthers-page';
  titleh2 = 'Esto es un titulo';
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde molestiae maxime eum velit accusamus architecto dolore enim fuga, possimus qui. Doloremque a quod dolorem eius. Reiciendis laudantium quia mollitia.'

  showFiller = false;
	therapies: Section[] = [
		{
			name: 'Terapía 1',
			updated: new Date('1/1/22'),
      icon: 'personal_injury',
      rute: ''
		},
		{
			name: 'Terapía 2',
			updated: new Date('1/17/22'),
      icon: 'sports_handball',
      rute: ''
		},
		{
			name: 'Terapía 3',
			updated: new Date('1/28/22'),
      icon: 'elderly',
      rute: ''
		}
	];
	experience: Section[] = [
		{
			name: 'Portafolio',
			updated: new Date('2/20/22'),
      icon: 'contact_page',
      rute: ''
		}
	];
  contact: Section[] = [
		{
			name: 'Redes Sociales',
			updated: new Date('2/20/22'),
      icon: 'contact_page',
      rute: ''
		}
	];
}
