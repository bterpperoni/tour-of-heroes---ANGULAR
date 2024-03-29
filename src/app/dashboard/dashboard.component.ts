import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, -(Math.floor(Math.random() * 5))));
      console.log(this.heroes, this.heroes.length);
    }
}
