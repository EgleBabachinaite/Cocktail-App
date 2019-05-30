import { Component, OnInit } from '@angular/core';
import {CocktailService} from './cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
  providers: [CocktailService]
})
export class CocktailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
