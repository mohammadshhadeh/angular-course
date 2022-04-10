import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode = false;
	recipeForm: FormGroup;
	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.editMode = params['id'] != null;
		});
		this.initForm();
	}

	get ingredientsFormGroups() {
		return <FormArray>this.recipeForm.get('ingredients');
	}

	private initForm() {
		let recipeName = '';
		let recipeImagePath = '';
		let recipeDescription = '';
		let recipeIngredients = new FormArray([]);

		if (this.editMode) {
			const recipe = this.recipeService.getRecipe(this.id);
			recipeName = recipe.name;
			recipeImagePath = recipe.imagePath;
			recipeDescription = recipe.description;
			if (recipe.ingredients) {
				for (const ingredient of recipe.ingredients) {
					recipeIngredients.push(
						this.createIngredients(ingredient.name, ingredient.amount)
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			imagePath: new FormControl(recipeImagePath, Validators.required),
			name: new FormControl(recipeName, Validators.required),
			description: new FormControl(recipeDescription, Validators.required),
			ingredients: recipeIngredients,
		});
	}

	onSubmit() {
		console.log(this.recipeForm);
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			this.createIngredients(null, null)
		);
	}

	private createIngredients(
		name: string | null,
		amount: number | null
	): FormGroup {
		return new FormGroup({
			name: new FormControl(name, Validators.required),
			amount: new FormControl(amount, [
				Validators.required,
				Validators.pattern(/^[1-9]\d*$/),
			]),
		});
	}
}
