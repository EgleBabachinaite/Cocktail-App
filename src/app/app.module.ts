import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { CocktailItemComponent } from './cocktails/cocktail-list/cocktail-item/cocktail-item.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { CocktailStartComponent } from './cocktails/cocktail-start/cocktail-start.component';
import { CocktailEditComponent } from './cocktails/cocktail-edit/cocktail-edit.component';
import {CocktailService} from './cocktails/cocktail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsComponent,
    CocktailListComponent,
    CocktailItemComponent,
    CocktailDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    CocktailStartComponent,
    CocktailEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
