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

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server',
    })

    console.log(123);
    
  };
  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'blueprint',
    })

    console.log(123);
    
  };
}
