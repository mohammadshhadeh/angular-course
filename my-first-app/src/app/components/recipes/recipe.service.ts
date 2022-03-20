import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Recipe 1',
			'A test recipe',
			'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredients('Meat', 1),
                new Ingredients('Fries', 10),
            ]
        ),
		new Recipe(
			'A Recipe 2',
			'A test recipe',
			'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredients('Buns', 2),
                new Ingredients('Meat', 1),
            ]
        ),
	];

    constructor(private shoppingService: ShoppingService) {}

	getRecipes() {
		return [...this.recipes];
	}

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredients[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}
