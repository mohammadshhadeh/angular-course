import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {
  listDetails: string = '';
  @Output() listDetailsAdded = new EventEmitter<string>();

  constructor() {
    this.listDetails = '';
  }

  ngOnInit(): void {
  }

  sendListDetails() {
    if (
      this.listDetails.trim()
    ) {
      this.listDetailsAdded.emit(this.listDetails);
    }

    this.listDetails = '';
  }
}
