import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-child-component',
  imports: [NgIf],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() text = '';

  @Input() question = '';

  @Input() name = '';

  @Output() replied = new EventEmitter<string>();

  @Output() greeted = new EventEmitter<string>();

  onReply(): void {
    this.replied.emit('I’m fine');
  }

  onGreet(): void {
    this.greeted.emit(`Hello, ${this.name}!`);
  }
}
