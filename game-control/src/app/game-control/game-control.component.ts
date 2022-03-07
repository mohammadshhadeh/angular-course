import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() increment =  new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startClick() {
    this.interval = setInterval(() => {
      this.increment.emit(this.lastNumber++);
    }, 1000)
  }

  stopClick() {
    clearInterval(this.interval);
  }
}
