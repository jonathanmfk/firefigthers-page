import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title!: string;
  description!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Esto es un titulo';
    this.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde molestiae maxime eum velit accusamus architecto dolore enim fuga, possimus qui. Doloremque a quod dolorem eius. Reiciendis laudantium quia mollitia.'
  }

}
