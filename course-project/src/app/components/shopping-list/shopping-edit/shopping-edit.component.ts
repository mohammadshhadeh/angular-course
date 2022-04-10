import {
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('form', { static: false }) shoppingListForm: NgForm;

	private subscription: Subscription;
	editMode: boolean = false;
	editedItemIndex: number;
	editedItem: Ingredient;

	constructor(private shoppingService: ShoppingService) {}

	ngOnInit(): void {
		this.subscription = this.shoppingService.startedEditing.subscribe(
			(index: number) => {
				this.editMode = true;
				this.editedItemIndex = index;
				this.editedItem = this.shoppingService.getIngredient(index);
				this.shoppingListForm.setValue({
					name: this.editedItem.name,
					amount: this.editedItem.amount,
				});
			}
		);
	}

	onSubmit() {
		const { name, amount } = this.shoppingListForm.value;
		const newIngredient = new Ingredient(name, amount);
		if (this.editMode) {
			this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
			this.editMode = false;
		} else {
			this.shoppingService.addIngredient(newIngredient);
		}

		this.shoppingListForm.reset();
	}

	onDelete() {
		this.shoppingService.deleteIngredient(this.editedItemIndex);
		this.editMode = false;
		this.shoppingListForm.reset();
	}

	onClear() {
		this.shoppingListForm.reset();
		this.editMode = false;
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
