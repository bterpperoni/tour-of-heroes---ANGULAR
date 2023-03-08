
/*-------------------------MANDATORY-------------------------------*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './../hero.service';
import { MessageService } from '../message.service';

@Component({
  // METADATA'S COMPONENT
  // The component's CSS element selector.
  selector: 'app-heroes',
  // The location of the component's template file.
  templateUrl: './heroes.component.html',
  // The location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})
/*-----------------------------------------------------------------*/
export class HeroesComponent implements OnInit{

// Service injection in the parent component (HeroesComponent) with a constructor
// /!\ Cannot call any function there. Reserve it for minimal init. /!\
constructor(private heroService: HeroService, private messageService: MessageService) {}

  // Storage attributes.
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // Bind hero chosen by the user to the 'selectedtHero' attribute.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // /!\ /!\ Need to use back tick (``) into the 'add' method to display the hero.name value /!\ /!\
    this.messageService.add(`HeroesComponent: Selected hero: ${hero.name}`);
  }

  // Get heroes from the service & bind it to heroes attr.
  getHeroes(): void {
    // .subscribe() passes the emitted array to 'heroes' attribute.
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // Angular will call ngOnInit() after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }
}
