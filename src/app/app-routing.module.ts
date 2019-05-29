import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CocktailsComponent} from './cocktails/cocktails.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {CocktailStartComponent} from './cocktails/cocktail-start/cocktail-start.component';
import {CocktailDetailComponent} from './cocktails/cocktail-detail/cocktail-detail.component';
import {CocktailEditComponent} from './cocktails/cocktail-edit/cocktail-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailsComponent, children: [
      { path: '', component: CocktailStartComponent },
      { path: 'new', component: CocktailEditComponent },
      { path: ':id', component: CocktailDetailComponent },
      { path: ':id/edit', component: CocktailEditComponent },
    ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  // configuring the router
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
