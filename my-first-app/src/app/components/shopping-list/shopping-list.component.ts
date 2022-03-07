import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 10),
    new Ingredients('Tomatoes', 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredients: Ingredients) {
    this.ingredients.push(ingredients)
  }

}
