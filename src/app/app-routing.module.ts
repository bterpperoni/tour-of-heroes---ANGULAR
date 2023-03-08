import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [{path: 'heroes', component: HeroesComponent}];

/* Routes tell the Router which view to display when a user clicks a link or pastes
   an URL into the browser address bar.
   A route have two properties : path (to match URL with URL into the browser address bar) & component (to create about the view).
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
