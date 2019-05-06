import { Component, OnInit } from '@angular/core';
import {Cocktail} from '../cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    new Cocktail('A Test Cocktail', 'Testing a cocktail',
      'https://www.goodfreephotos.com/albums/food/delicious-cocktail-drink.jpg'),
    new Cocktail('A Jasmine Cocktail', 'Very tasty cocktail',
      'https://cdn.liquor.com/wp-content/uploads/2016/09/12154233/jasmine-720x720-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}


