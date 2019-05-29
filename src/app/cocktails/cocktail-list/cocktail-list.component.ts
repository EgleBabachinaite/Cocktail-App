import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail.model';
import {CocktailService} from '../cocktail.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService,
              private router: Router,
              private route: ActivatedRoute) {
}

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

  onNewCocktail() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}


