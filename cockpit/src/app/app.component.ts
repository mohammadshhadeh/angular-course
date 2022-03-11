import { Component } from '@angular/core';

interface Server {
  name: string;
  type?: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [{
    type: 'server',
    name: 'Test Server',
    content: 'just a Server',
  }];

  onServerAdded(severData: Server) {
    this.serverElements.push({
      type: 'server',
      name: severData.name,
      content: severData.content
    });
  }

  onBlueprintAdded(severData: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: severData.name,
      content: severData.content
    });
  }

  onNameChanged() {
    this.serverElements[0].name = 'Changed!'
  }

  onFirstDestroy() {
    this.serverElements.splice(0, 1)
  }
}
