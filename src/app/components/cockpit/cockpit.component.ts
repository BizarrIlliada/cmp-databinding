import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnChanges, OnInit, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() someString: string;

  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef<HTMLInputElement>;
  @ViewChild('paragraph', { static: true }) paragraph: ElementRef<HTMLParagraphElement>

  constructor() {
    console.log('Constructor');
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value,
    })

    console.log(nameInput);
    console.dir(nameInput);

    console.log(contentInput);
    console.dir(contentInput);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    })

    console.log(nameInput);
    console.dir(nameInput);

    console.log(this.serverContentInput);
    console.dir(this.serverContentInput);
  }

  click() {
    console.log('Clicked');
  }

  ngOnInit() {
    console.log('On init');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.dir('On change');
    console.log(this.paragraph.nativeElement.textContent);
    console.log(changes);
  }

  ngDoCheck() {
    console.log('Do check');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('On after content init');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('On after content checked');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('On after view init');
    console.log(this.paragraph.nativeElement.textContent);
  }
  
  ngAfterViewChecked(): void {
    console.log('On after view checked');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(): void {
      console.log('On destroy');
  }
}
