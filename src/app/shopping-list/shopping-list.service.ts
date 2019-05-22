import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  // adding new EventEmitter to emit ingredient array
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Gin', 1.5),
    new Ingredient('Campari', 0.25)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // turning an array of elements into a list of elements (using spread operator)
    this.ingredients.push(...ingredients);
    // emitting that ingredients changed and passing a copy
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
