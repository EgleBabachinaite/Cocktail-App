import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Cocktail} from './cocktail.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class CocktailService {
  cocktailsChanged = new Subject<Cocktail[]>();

  private cocktails: Cocktail[] = [
    new Cocktail(
      'A Negroni cocktail ',
      'A bitter cocktail',
      'https://live.staticflickr.com/2906/33733813195_5478789b67_b.jpg',
      [
        new Ingredient('Sweet vermouth', 30),
        new Ingredient('Campari', 30),
        new Ingredient('Gin', 30)
      ]),
    new Cocktail(
      'A Jasmine Cocktail',
      'A Fruity/Citrus cocktail',
      'https://cdn.liquor.com/wp-content/uploads/2016/09/12154233/jasmine-720x720-recipe.jpg',
      [
        new Ingredient('Gin', 45),
        new Ingredient('Campari', 7.5),
        new Ingredient('Orange liqueur', 7.5),
        new Ingredient('Fresh lemon juice', 22)
      ])
  ];

  // injecting a service in the constructor of cocktail service class
  constructor(private slService: ShoppingListService) {}

  getCocktails() {
    return this.cocktails.slice();
  }

  getCocktail(index: number) {
    return this.cocktails[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addCocktail(cocktail: Cocktail) {
    this.cocktails.push(cocktail);
    this.cocktailsChanged.next(this.cocktails.slice());
  }

  updateCocktail(index: number, newCocktail: Cocktail) {
    this.cocktails[index] = newCocktail;
    this.cocktailsChanged.next(this.cocktails.slice());
  }

  deleteCocktail(index: number) {
    this.cocktails.splice(index, 1);
    this.cocktailsChanged.next(this.cocktails.slice());
  }
}
