import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail} from '../../cocktail.model';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent implements OnInit {
  @Input() cocktail: Cocktail;
  @Output() cocktailSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.cocktailSelected.emit();
  }

}
