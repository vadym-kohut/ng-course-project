import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cordon_bleu_mit_Pommes_und_Preiselbeeren.JPG/1280px-Cordon_bleu_mit_Pommes_und_Preiselbeeren.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hamburguesa_%2829_de_diciembre_de_2019%29.jpg/1280px-Hamburguesa_%2829_de_diciembre_de_2019%29.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    ),
  ];

  constructor(
    private slService: ShoppingListService
  ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
