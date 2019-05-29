import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail.model';
import {CocktailService} from '../cocktail.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
  cocktail: Cocktail;
  id: number;

  constructor(private cocktailService: CocktailService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.cocktail = this.cocktailService.getCocktail(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.cocktailService.addIngredientsToShoppingList(this.cocktail.ingredients);
  }

  onEditCocktail() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
