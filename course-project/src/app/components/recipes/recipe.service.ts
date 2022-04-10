import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe(
			'A Recipe 1',
			'A test recipe',
			'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
			[new Ingredient('Meat', 1), new Ingredient('Fries', 10)]
		),
		new Recipe(
			'A Recipe 2',
			'A test recipe',
			'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
			[new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
		),
	];

	constructor(private shoppingService: ShoppingService) {}

	getRecipes() {
		return [...this.recipes];
	}

	getRecipe(index: number): Recipe {
		return this.recipes[index];
	}

	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.shoppingService.addIngredients(ingredients);
	}
}
