import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  // Metadata
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Custom events with EventEmitter
  @Output('sCreated') serverCreated = new EventEmitter<{
    name: string,
    content: string,
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    name: string,
    content: string,
  }>();
  // template reference
  @ViewChild('serverContent') serverContent: any /*ElementRef*/;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContent.nativeElement.value,
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContent.nativeElement.value,
    })
  }
}
