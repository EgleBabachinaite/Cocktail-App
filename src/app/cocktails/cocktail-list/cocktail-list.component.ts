import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail.model';
import {CocktailService} from '../cocktail.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[];
  subscription: Subscription;

  constructor(private cocktailService: CocktailService,
              private router: Router,
              private route: ActivatedRoute) {
}

  ngOnInit() {
    this.subscription = this.cocktailService.cocktailsChanged
      .subscribe(
        (cocktails: Cocktail[]) => {
          this.cocktails = cocktails;
        }
      );
    this.cocktails = this.cocktailService.getCocktails();
  }

  onNewCocktail() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


