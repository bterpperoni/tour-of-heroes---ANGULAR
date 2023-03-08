import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Mark the class with @Injectable to allow it to be provided.
@Injectable({
  // Service provided to root level.
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}
  /*
    Return an Observable Collection ( of() emits a single value : the array of mock heroes).
    The function therefore becomes asynchronous càd that the method will return an
    Observable when the component will be created.
  */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // Send a message to MessageComponent (See it to know how to display the message)
    this.messageService.add('HeroService: Fetched heroes');
    return heroes;
  }
}
