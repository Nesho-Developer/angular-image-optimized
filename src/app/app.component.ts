import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities: { name: string; image: string; alt: string }[] = [
    {
      name: 'trulli',
      image: 'pic_trulli.jpg',
      alt: 'Italian Trulli',
    },
    {
      name: 'chania',
      image: 'img_chania.jpg',
      alt: 'Chania',
    },
    {
      name: 'venice',
      image: 'Grand-Canal-Venice.webp',
      alt: 'Venice',
    },
  ];
}
