import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Referenced only in app.component.html (useless?)
export class AppComponent {
  title = 'Battery App';
}
