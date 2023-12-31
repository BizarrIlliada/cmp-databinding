import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Test',
      content: 'Lorem Ipsum',
    },
    {
      type: 'blueprint',
      name: 'Test1',
      content: 'Lorem Ipsum1',
    },
  ];
  testVal = 'Some string';
  isExist = true;

  constructor() {
    setTimeout(() => {
      // this.testVal = 'New some string';
      this.serverElements[0].name = 'Changed!';
      // this.isExist = false;
    }, 2000);
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server',
    })
  };
  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'blueprint',
    })
  };
}
