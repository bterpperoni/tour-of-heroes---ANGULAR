import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // Allow to bind this component to external component HeroesComponent with @Input().
  // This component just receives a Hero Object & display it.
  @Input() hero?: Hero;
}
