/*--------------------------------COMPONENT--------------------------------*/
import { Hero } from '../hero';
import { Component, Input, OnInit } from '@angular/core';
/*--------------------------------SERVICES--------------------------------*/
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. It is interested in the route's parameters extracted from the URL.
import { ActivatedRoute } from '@angular/router';
// The HeroService gets hero data from the remote server and this component uses it to get the hero-to-display.
import { HeroService } from '../hero.service';
// The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
import { Location } from '@angular/common';

@Component({
selector: 'app-hero-detail',
templateUrl: './hero-detail.component.html',
styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

constructor(private route: ActivatedRoute,
            private heroService: HeroService,
            private location: Location) {}
// Allow to bind this component to external component HeroesComponent with @Input().
// This component just receives a Hero Object & display it.
hero: Hero | undefined;

ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  /*
  - The route.snapshot is a static image of the route information shortly after the component was created.
  - The paramMap is a dictionary of route parameter values extracted from the URL.
  - Route parameters are always strings. The JavaScript Number function converts the string to a number.
  */
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
}

save(): void {
  if(this.hero){
    this.heroService.updateHero(this.hero)
                    .subscribe(() => this.goBack());
  }
}

goBack(): void {
  this.location.back();
}
}
