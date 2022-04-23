import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { RecipeService } from '../components/recipes/recipe.service';
import { pipe, map, tap } from 'rxjs';
import { RecipesComponent } from '../components/recipes/recipes.component';

@Injectable({
	providedIn: 'root',
})
export class DataStorageService {
	private dbUrl: string =
		'https://course-project-4b526-default-rtdb.firebaseio.com';

	constructor(private http: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		const recipe = this.recipeService.getRecipes();
		this.http.put(`${this.dbUrl}/recipe.json`, recipe).subscribe((response) => {
			console.log('response: ', response);
		});
	}

	fetchRecipes() {
		return this.http.get<Recipe[]>(`${this.dbUrl}/recipe.json`).pipe(
			map((recipes) => {
				return recipes.map((recipe) => {
					return { ...recipe, ingredients: recipe.ingredients || [] };
				});
			}),
			tap((recipes) => {
				this.recipeService.setRecipes(recipes);
			})
		);
	}
}
