import { EventEmitter } from "@angular/core";
import { Ingredients } from "src/app/shared/ingredients.model";

export class ShoppingService {
    ingredientsChanged =  new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 10),
        new Ingredients('Tomatoes', 5),
    ];

    addIngredients(ingredients: Ingredients) {
        this.ingredients.push(ingredients)
        this.ingredientsChanged.emit([...this.ingredients])
    }

    getIngredients() {
        return [...this.ingredients]
    }
}
