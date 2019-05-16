import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail.model';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }

}
