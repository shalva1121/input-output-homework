import { Component } from '@angular/core';
import { ParentComponent } from './parent-component/parent-component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
