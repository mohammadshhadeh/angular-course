import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: string[] = [];

  appendListDetails(list: string) {
    this.lists.push(list)
  }
}
