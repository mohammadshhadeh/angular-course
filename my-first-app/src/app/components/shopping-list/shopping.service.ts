import { Subject } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';

export class ShoppingService {
	ingredientsChanged = new Subject<Ingredients[]>();

	private ingredients: Ingredients[] = [
		new Ingredients('Apples', 10),
		new Ingredients('Tomatoes', 5),
	];

	addIngredient(ingredients: Ingredients) {
		this.ingredients.push(ingredients);
		this.ingredientsChanged.next([...this.ingredients]);
	}

	getIngredients() {
		return [...this.ingredients];
	}

	addIngredients(ingredients: Ingredients[]) {
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next([...this.ingredients]);
	}
}
