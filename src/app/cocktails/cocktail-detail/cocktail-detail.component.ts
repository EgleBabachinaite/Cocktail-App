import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail.model';
import {CocktailService} from '../cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.cocktailService.addIngredientsToShoppingList(this.cocktail.ingredients);
  }

}
