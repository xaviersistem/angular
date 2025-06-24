import { Component } from '@angular/core';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Register],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}