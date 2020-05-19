import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['@media (max-width: 1180px) { .sidebar { display: none !important;} }']
})
export class AppComponent {
  title = 'angularjs-app';
}
