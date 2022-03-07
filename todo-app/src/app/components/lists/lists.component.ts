import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input('lists') lists: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeList(index: number) {
    this.lists.splice(index, 1);
  }

}
