import { Component, OnInit } from '@angular/core';
import {Cocktail} from './cocktail.model';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  selectedCocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }

}
