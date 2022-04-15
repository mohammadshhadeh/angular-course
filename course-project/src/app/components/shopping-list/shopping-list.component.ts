import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[] = [];
	private subscription: Subscription;

	constructor(private shoppingService: ShoppingService) {}

	ngOnInit(): void {
		this.ingredients = this.shoppingService.getIngredients();
		this.subscription = this.shoppingService.ingredientsChanged.subscribe(
			(ingredients: Ingredient[]) => {
				this.ingredients = ingredients;
			}
		);
	}

	onEditItem(index: number) {
		this.shoppingService.startedEditing.next(index);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
