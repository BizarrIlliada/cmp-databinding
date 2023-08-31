import { Component, Input, ViewEncapsulation, ContentChild, ElementRef, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None ShadowDom
})
export class ServerElementComponent implements AfterContentChecked {
  @Input('serverElementName') name: string
  @ContentChild('emTag', {static: true}) emTag: ElementRef

  ngAfterContentChecked(): void {
    console.log(this.emTag.nativeElement.textContent);
  }
}
