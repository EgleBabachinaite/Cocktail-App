import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from '../../cocktail.model';
import {CocktailService} from '../../cocktail.service';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  }

  onSelected() {
    // the data we want to pass
    this.cocktailService.cocktailSelected.emit(this.cocktail);
  }

}
