import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TodoList } from '../todo.component';

@Component({
  selector: 'app-enter-todo',
  templateUrl: './enter-todo.component.html',
  styleUrls: ['./enter-todo.component.css']
})
export class EnterTodoComponent implements OnInit {
  @Output() enteredTodo = new EventEmitter<TodoList>();
  @Output() filterEvent = new EventEmitter<boolean>();
  todoItem: string = '';
  checked: boolean = false;
  todoItemFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enteredTodoHandler() {
    if (this.todoItem.trim()) {
      this.enteredTodo.emit({
        list: this.todoItem,
        isChecked: this.checked
      })

      this.todoItem = '';
    }
  }

  filterTodoLists() {
    this.filterEvent.emit(this.todoItemFilter);
  }
}
