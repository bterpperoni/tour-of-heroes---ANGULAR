import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  /**
   *    @type {Subject} -
   *    A Subject is a special type of Observable that allows values to be
   *    multicasted to many Observers. Subjects are like EventEmitters.
   *
   *    Every Subject is an Observable and an Observer. You can subscribe to a
   *    Subject, and you can call next to feed values as well as error and complete.
   */
  private searchTerms = new Subject<string>();
  heroes$!: Observable<Hero[]>;
  constructor(private heroService: HeroService) { };

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)));
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
