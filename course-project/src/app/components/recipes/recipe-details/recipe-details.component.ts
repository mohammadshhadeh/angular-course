import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
	recipe: Recipe;
	id: number;
	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.recipe = this.recipeService.getRecipe(this.id);
		});
	}

	onAddToShoppingList() {
		this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
	}

	onEditRecipe() {
		this.router.navigate(['edit'], { relativeTo: this.route });
		// this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
	}

	onDeleteRecipe() {
		this.recipeService.deleteRecipe(this.id);
		this.router.navigate(['../'], { relativeTo: this.route });
	}
}
