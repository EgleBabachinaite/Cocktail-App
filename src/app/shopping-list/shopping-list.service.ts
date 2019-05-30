import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Gin', 1.5),
    new Ingredient('Campari', 0.25)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // turning an array of elements into a list of elements (using spread operator)
    this.ingredients.push(...ingredients);
    // emitting that ingredients changed and passing a copy
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
