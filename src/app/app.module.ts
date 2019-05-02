import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { CocktailItemComponent } from './cocktails/cocktail-list/cocktail-item/cocktail-item.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsComponent,
    CocktailListComponent,
    CocktailItemComponent,
    CocktailDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
