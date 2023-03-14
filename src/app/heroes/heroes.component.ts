
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
constructor(private heroService: HeroService) {}

/**
 *  @property {Hero[]} heroes - The list of hero
 */
heroes: Hero[] = [];


// Get heroes from the service & bind it to heroes attr.
getHeroes(): void {
  // .subscribe() passes the emitted array to 'heroes' attribute.
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}

// Angular will call ngOnInit() after constructing a HeroesComponent instance.
ngOnInit(): void {
  this.getHeroes();
}

add(name: string): void {
  name = name.trim();
  if (!name) {return;}
  this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
}

/**
 * @requires .subscribe()
 *  - If you neglect it, the service can't send the delete request to the server.
 *  - As a rule, an Observable does nothing until something subscribes.
 *
 * @param hero - Hero to delete
 */
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}


  /*------------------------------------OLDER VERSION-----------------------------------------------*/
  /*
    Bind hero chosen by the user to the 'selectedtHero' attribute.
    /!\ /!\ Need to use back tick (``) into the 'add' method to display the hero.name value /!\ /!\.
  */
    /**
     *  @function onSelect(hero:Hero) - Return the selected hero.
     */


}
