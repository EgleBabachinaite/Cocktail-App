import { Component, OnInit } from '@angular/core';
import {Cocktail} from './cocktail.model';
import {CocktailService} from './cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
  providers: [CocktailService]
})
export class CocktailsComponent implements OnInit {
  selectedCocktail: Cocktail;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    // setting a listener
    this.cocktailService.cocktailSelected
      // getting informed about any changes
      .subscribe(
        // argument list with a function body
        (cocktail: Cocktail) => {
          this.selectedCocktail = cocktail;
        }
      );
  }

}
