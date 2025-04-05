import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  navItems = ['Vector', 'Illustrations', 'Images', 'Icons'];
}
