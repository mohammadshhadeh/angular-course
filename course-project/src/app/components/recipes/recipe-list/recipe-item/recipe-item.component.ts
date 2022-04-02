import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe;
	@Input() index: number;

	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		// this.route.snapshot.params['id'];
	}
}
