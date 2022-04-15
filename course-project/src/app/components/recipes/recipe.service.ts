import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
	recipeChanged = new Subject<Recipe[]>();

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

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipeChanged.next([...this.recipes])
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipeChanged.next([...this.recipes])
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipeChanged.next([...this.recipes])
	}
}
