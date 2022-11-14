import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  jsonData = [ 
    {id: 1, type: "app-table"}, 
    {id: 2, type: "app-button"},
    {id: 3, type: "app-table"}, 
 ];
}
