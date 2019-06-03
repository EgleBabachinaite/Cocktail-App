import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CocktailService} from '../cocktail.service';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  id: number;
  editMode = false;
  cocktailForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private cocktailService: CocktailService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          // checking if params has an id
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newCocktail = new Cocktail(
    //   this.cocktailForm.value.name,
    //   this.cocktailForm.value.description,
    //   this.cocktailForm.value.imagePath,
    //   this.cocktailForm.value.ingredients);
    if (this.editMode) {
      this.cocktailService.updateCocktail(this.id, this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (this.cocktailForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]+\.[0-9]+?[0-9]|[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  getControls() {
    return (this.cocktailForm.get('ingredients') as FormArray).controls;
  }

  onDeleteIngredient(index: number) {
    (this.cocktailForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  private initForm() {
    let cocktailName = '';
    let cocktailImagePath = '';
    let cocktailDescription = '';
    const cocktailIngredients = new FormArray([]);

    if (this.editMode) {
      const cocktail = this.cocktailService.getCocktail(this.id);
      cocktailName = cocktail.name;
      cocktailImagePath = cocktail.imagePath;
      cocktailDescription = cocktail.description;
      if (cocktail.ingredients) {
        for (const ingredient of cocktail.ingredients) {
          cocktailIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+\.[0-9]+?[0-9]|[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.cocktailForm = new FormGroup({
      name: new FormControl(cocktailName, Validators.required),
      imagePath: new FormControl(cocktailImagePath, Validators.required),
      description: new FormControl(cocktailDescription, Validators.required),
      ingredients: cocktailIngredients
    });
  }

}
