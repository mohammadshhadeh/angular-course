import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingList: any[] = [];
  @ViewChild('nameInput') nameInput: any;
  @ViewChild('amountInput') amountInput: any;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  addShoppingList() {
    this.ingredientAdded.emit(
      new Ingredients(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value,
      )
    )
  }
}
