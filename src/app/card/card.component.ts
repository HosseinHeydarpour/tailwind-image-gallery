import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { SearchComponent } from '../search/search.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NavigationComponent, SearchComponent, GalleryComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  navItems = ['Vector', 'Illustrations', 'Images', 'Icons'];
}
