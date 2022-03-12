import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todoLists: any;
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodoList(index: number) {
    this.todoLists.splice(index, 1)
  }

  updatedcheckedList(index: number) {
    this.todoLists[index].isChecked = !this.todoLists[index].isChecked;
  }

}
