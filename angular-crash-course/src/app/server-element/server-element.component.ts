import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

type Server = {
  name?: string;
  type?: string;
  content?: string;
};

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: Server;
  @Input() name: any;
  @ViewChild('heading', { static: true}) header: any;
  @ContentChild('serverParagraph', { static: true}) paragraph: any;

  constructor() {
    this.element = {};
    console.log('constructor called!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!!', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: ');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log('ngAfterContentInit------->', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ');
    console.log('ngAfterViewInit-------------->', this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
    console.log('ngOnInit------->', this.paragraph.nativeElement.textContent);
    console.log('ngOnInit-------------->', this.header.nativeElement.textContent);
  }
}
