import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prop = 3;
  changes = 5;
  title = 'kitchen-sink-2';
  foo = 'bar';
  bar = 'foo2';
}
