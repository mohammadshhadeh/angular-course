import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

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

	constructor(private shoppingService: ShoppingService, private loggingService: LoggingService) {}

	ngOnInit(): void {
		this.ingredients = this.shoppingService.getIngredients();
		this.subscription = this.shoppingService.ingredientsChanged.subscribe(
			(ingredients: Ingredient[]) => {
				this.ingredients = ingredients;
			}
		);
		this.loggingService.printLog('Hello from ShoppingListComponent')
	}

	onEditItem(index: number) {
		this.shoppingService.startedEditing.next(index);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
