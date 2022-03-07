import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() {
  }

  onIncrement(number: number) {
    if (number % 2 !== 0) {
      this.oddNumbers = [...this.oddNumbers, number]
    } else {
      this.evenNumbers = [...this.evenNumbers, number]
    }
  }
}
