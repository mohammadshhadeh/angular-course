import { Component, OnInit } from '@angular/core';

export interface TodoList {
  list?: string;
  isChecked?: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoLists: TodoList[] = [];
  todoFilter: TodoList[] = [];
  isFiltered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectedTodoItem(todoList: TodoList): void {
    this.todoLists.push(todoList);
  }

  filterTodoLists(isFiltered: boolean) {
    this.isFiltered = isFiltered;
    this.todoFilter = this.todoLists.filter((list) => list.isChecked)
  }

}
