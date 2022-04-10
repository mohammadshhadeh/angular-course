import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';

export class ShoppingService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 10),
		new Ingredient('Tomatoes', 5),
	];

	getIngredients() {
		return [...this.ingredients];
	}

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next([...this.ingredients]);
	}

	addIngredients(ingredient: Ingredient[]) {
		this.ingredients.push(...ingredient);
		this.ingredientsChanged.next([...this.ingredients]);
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next([...this.ingredients]);
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1)
		this.ingredientsChanged.next([...this.ingredients]);
	}
}
