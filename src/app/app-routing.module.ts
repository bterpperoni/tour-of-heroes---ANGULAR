import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*
   - Routes tell the Router which view to display when a user clicks a link or pastes an URL into the browser address bar.

   - A route have two properties : path (to match URL with URL into the browser address bar) & component (to create about the view).

   - The route with path '' redirects a URL that fully matches the empty path (/) to the route whose path is '/dashboard' (using the 'redirectTo' property).

   - The ':id' in the route with path '/detail/:id' indicates that is a placeholder for a specific hero id.
*/
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
