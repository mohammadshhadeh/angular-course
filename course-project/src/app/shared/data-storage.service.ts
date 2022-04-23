import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { RecipeService } from '../components/recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../components/auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class DataStorageService {
	private dbUrl: string =
		'https://course-project-4b526-default-rtdb.firebaseio.com';

	constructor(
		private http: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService
	) {}

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
