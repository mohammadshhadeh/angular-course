import { Component } from '@angular/core';

// A component controls a part of the application screen.
// It's a TypeScript class that gets decorated with a @Component decorator.
// You can divide your application into independent pieces that control specific parts of the app.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Angular Crash Course!';
}
